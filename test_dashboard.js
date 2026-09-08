const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching Chrome instance...');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to dashboard...');
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle2' });
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Current URL:', page.url());

  const screenshotDir = '/workspace';
  let screenshotCount = 7;

  // Helper function to take screenshots
  async function takeScreenshot(name) {
    const filename = path.join(screenshotDir, `screenshot_${String(screenshotCount).padStart(2, '0')}_${name}.webp`);
    await page.screenshot({ path: filename, type: 'webp', quality: 90 });
    console.log(`Screenshot saved: ${filename}`);
    screenshotCount++;
    return filename;
  }

  try {
    // Task 1: Scroll within the phone mockup to reveal lower sections
    console.log('\n=== Task 1: Scrolling to reveal lower sections ===');
    
    // Try to find and scroll the main content area
    const scrollableSelector = '.phone-content, .stage, main, .app-content, body';
    
    // Take initial screenshot
    await takeScreenshot('before_scroll');
    
    // Try scrolling with different methods
    console.log('Attempting to scroll page down...');
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await takeScreenshot('after_scroll_1');

    // Try scrolling within specific element
    const scrolled = await page.evaluate(() => {
      const phone = document.querySelector('.phone-screen, .phone-content, .mockup-content');
      if (phone) {
        phone.scrollTop += 500;
        return true;
      }
      return false;
    });
    console.log('Phone element scrolled:', scrolled);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await takeScreenshot('after_scroll_2');

    // Scroll more
    await page.evaluate(() => {
      window.scrollBy(0, 500);
      const phone = document.querySelector('.phone-screen, .phone-content, .mockup-content');
      if (phone) phone.scrollTop += 500;
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await takeScreenshot('after_scroll_3');

    // Task 2: Change district to "Karbi Anglong"
    console.log('\n=== Task 2: Changing district to Karbi Anglong ===');
    
    const districtSelector = '#district';
    const districtExists = await page.$(districtSelector);
    
    if (districtExists) {
      console.log('District selector found');
      
      // Try to change to Karbi Anglong
      await page.select(districtSelector, 'karbi');
      await new Promise(resolve => setTimeout(resolve, 1500));
      await takeScreenshot('karbi_anglong_selected');
      console.log('Changed to Karbi Anglong');
      
      // Task 3: Change to Cachar for green/stable state
      console.log('\n=== Task 3: Changing district to Cachar ===');
      await page.select(districtSelector, 'cachar');
      await new Promise(resolve => setTimeout(resolve, 1500));
      await takeScreenshot('cachar_stable_state');
      console.log('Changed to Cachar');
      
      // Change back to Guwahati Hills
      await page.select(districtSelector, 'guwahati');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } else {
      console.log('District selector not found');
    }

    // Task 4: Click "Routes" chip
    console.log('\n=== Task 4: Clicking Routes chip ===');
    
    const routesChipClicked = await page.evaluate(() => {
      const chips = document.querySelectorAll('.chip, .map-chip, button');
      for (let chip of chips) {
        if (chip.textContent.toLowerCase().includes('routes')) {
          chip.click();
          return true;
        }
      }
      return false;
    });
    
    console.log('Routes chip clicked:', routesChipClicked);
    await new Promise(resolve => setTimeout(resolve, 1500));
    await takeScreenshot('routes_layer_active');

    // Task 5: Click "Activate Siren" button
    console.log('\n=== Task 5: Clicking Activate Siren ===');
    
    const sirenClicked = await page.evaluate(() => {
      // Look for the Act button or Activate Siren button
      const buttons = document.querySelectorAll('button, .btn, .button');
      for (let btn of buttons) {
        const text = btn.textContent.toLowerCase();
        if (text.includes('act') || text.includes('siren')) {
          btn.click();
          return true;
        }
      }
      return false;
    });
    
    console.log('Siren button clicked:', sirenClicked);
    await new Promise(resolve => setTimeout(resolve, 500));
    await takeScreenshot('after_siren_click');
    
    // Wait a bit more to see if toast appears
    await new Promise(resolve => setTimeout(resolve, 2000));
    await takeScreenshot('toast_check');

    console.log('\n=== Testing Complete ===');
    console.log(`Total screenshots taken: ${screenshotCount - 7}`);

  } catch (error) {
    console.error('Error during testing:', error);
    await takeScreenshot('error_state');
  }

  // Close browser
  await browser.close();
  console.log('Script complete.');
})();
