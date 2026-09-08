const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Loading dashboard...');
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle2' });
  await new Promise(resolve => setTimeout(resolve, 1500));

  const screenshotDir = '/workspace';
  let count = 16;

  async function screenshot(name) {
    const filename = path.join(screenshotDir, `screenshot_${String(count).padStart(2, '0')}_${name}.webp`);
    await page.screenshot({ path: filename, type: 'webp', quality: 90, fullPage: false });
    console.log(`Saved: ${filename}`);
    count++;
    return filename;
  }

  try {
    // Check what's currently visible
    const sections = await page.evaluate(() => {
      const elements = {
        iotSensors: !!document.querySelector('.sensor-grid, #sensorGrid'),
        rainfall: !!Array.from(document.querySelectorAll('.card-label')).find(el => el.textContent.includes('Rainfall')),
        soilMoisture: !!Array.from(document.querySelectorAll('.card-label')).find(el => el.textContent.includes('Soil')),
        evacuation: !!document.querySelector('.evacuation, .shelters'),
        broadcast: !!document.querySelector('.broadcast, .siren'),
        historical: !!document.querySelector('.trends, .historical')
      };
      
      // Get scroll info
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      
      return {
        sections: elements,
        scrollHeight: height,
        scrollTop: window.pageYOffset || document.documentElement.scrollTop,
        clientHeight: window.innerHeight
      };
    });
    
    console.log('Page dimensions:', sections);
    console.log('Sections found:', sections.sections);

    await screenshot('initial_full_view');

    // Try different scrolling methods
    console.log('\n=== Method 1: Keyboard scrolling ===');
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('PageDown');
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    await screenshot('after_keyboard_scroll');

    // Method 2: Scroll to specific elements
    console.log('\n=== Method 2: Scrolling to IoT Sensors ===');
    await page.evaluate(() => {
      const iot = document.querySelector('.sensor-grid, #sensorGrid');
      if (iot) {
        iot.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await new Promise(resolve => setTimeout(resolve, 1500));
    await screenshot('iot_sensors_view');

    // Scroll to rainfall
    console.log('=== Scrolling to Rainfall ===');
    await page.evaluate(() => {
      const labels = Array.from(document.querySelectorAll('.card-label'));
      const rainfall = labels.find(el => el.textContent.includes('Rainfall'));
      if (rainfall) {
        rainfall.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await new Promise(resolve => setTimeout(resolve, 1500));
    await screenshot('rainfall_section');

    // Scroll to evacuation
    console.log('=== Scrolling to Evacuation ===');
    await page.evaluate(() => {
      const labels = Array.from(document.querySelectorAll('.card-label, h3, h2'));
      const evac = labels.find(el => el.textContent.toLowerCase().includes('evacuation') || 
                                     el.textContent.toLowerCase().includes('shelter') ||
                                     el.textContent.toLowerCase().includes('relief'));
      if (evac) {
        evac.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await new Promise(resolve => setTimeout(resolve, 1500));
    await screenshot('evacuation_section');

    // Scroll to bottom
    console.log('=== Scrolling to bottom ===');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(resolve => setTimeout(resolve, 1500));
    await screenshot('bottom_of_page');

    console.log('\n=== Scroll testing complete ===');
    console.log(`Captured ${count - 16} additional screenshots`);

  } catch (error) {
    console.error('Error:', error);
    await screenshot('error');
  }

  await browser.close();
  console.log('Done.');
})();
