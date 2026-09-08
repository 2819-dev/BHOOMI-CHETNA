const DISTRICT_DATA = {
  guwahati: {
    name: "Guwahati Hills",
    score: 78,
    confidence: 91,
    predHeadline: "Slope instability rising on Chandmari corridor",
    predMeta: "Estimated failure window: 6 to 12 hours",
    rain: 86,
    rainSeries: [28, 42, 55, 48, 70, 88, 76],
    soil: 74,
    rainThreshold: 65,
    zones: [
      { id: "R-2", tone: "red", title: "R-2 Chandmari Slope", score: 86, action: "Evacuate", dist: "0.8 km", x: 168, y: 148 },
      { id: "R-5", tone: "amber", title: "R-5 Kharghuli Ridge", score: 64, action: "Watch", dist: "2.1 km", x: 250, y: 168 },
      { id: "R-7", tone: "amber", title: "R-7 Fatasil Cut", score: 58, action: "Monitor", dist: "3.4 km", x: 300, y: 128 },
    ],
    sensors: [
      { id: "GH-S01", name: "Incline", status: "online", unit: "°", value: 2.4, x: 160, y: 140 },
      { id: "GH-S02", name: "Pore Pressure", status: "online", unit: "kPa", value: 48, x: 242, y: 160 },
      { id: "GH-S03", name: "Vibration", status: "warn", unit: "mm/s", value: 3.1, x: 292, y: 122 },
      { id: "GH-S04", name: "Extensometer", status: "offline", unit: "mm", value: null, x: 108, y: 188 },
      { id: "GH-S05", name: "Rain Gauge", status: "online", unit: "mm", value: 86, x: 205, y: 195 },
    ],
    route: {
      title: "Primary Route",
      path: "Chandmari → Zoo Road → Dispur Community Hall",
      eta: "14 min",
      steps: ["Assemble at Chandmari muster point", "Follow Zoo Road corridor (marked)", "Check in at Dispur Community Hall"],
    },
    shelters: [
      { name: "Dispur Community Hall", place: "Dispur, Guwahati", capacity: 420, occupied: 186, dist: "2.4 km" },
      { name: "Latasil Ground Camp", place: "Latasil, Guwahati", capacity: 280, occupied: 94, dist: "3.1 km" },
      { name: "Chandmari School Block", place: "Chandmari, Guwahati", capacity: 160, occupied: 42, dist: "1.1 km" },
    ],
    trend7: [42, 48, 51, 55, 63, 71, 78],
    trend30: [30, 34, 38, 41, 45, 48, 52, 49, 55, 58, 60, 57, 62, 66, 70, 68, 72, 69, 74, 71, 73, 76, 74, 77, 75, 78, 80, 79, 77, 78],
  },
  dima: {
    name: "Dima Hasao",
    score: 61,
    confidence: 87,
    predHeadline: "Soil saturation elevating cut-slope risk",
    predMeta: "Escalate if 24h rainfall exceeds 40 mm",
    rain: 58,
    rainSeries: [22, 30, 36, 41, 49, 55, 58],
    soil: 66,
    rainThreshold: 40,
    zones: [
      { id: "DH-3", tone: "amber", title: "DH-3 Haflong Cut", score: 67, action: "Watch", dist: "1.2 km", x: 190, y: 150 },
      { id: "DH-1", tone: "amber", title: "DH-1 Mahur Ridge", score: 59, action: "Monitor", dist: "4.0 km", x: 250, y: 170 },
      { id: "DH-6", tone: "green", title: "DH-6 Stable Bench", score: 28, action: "Stable", dist: "6.5 km", x: 110, y: 195 },
    ],
    sensors: [
      { id: "DH-S01", name: "Incline", status: "online", unit: "°", value: 1.6, x: 180, y: 145 },
      { id: "DH-S02", name: "Rain Gauge", status: "online", unit: "mm", value: 58, x: 240, y: 165 },
      { id: "DH-S03", name: "Soil Probe", status: "online", unit: "%", value: 66, x: 120, y: 190 },
      { id: "DH-S04", name: "Vibration", status: "warn", unit: "mm/s", value: 2.2, x: 280, y: 130 },
    ],
    route: {
      title: "Primary Route",
      path: "Haflong Bazaar → NH-27 → Haflong Town Hall",
      eta: "18 min",
      steps: ["Leave hillside settlements via signed egress", "Merge onto NH-27 southbound", "Report at Haflong Town Hall"],
    },
    shelters: [
      { name: "Haflong Town Hall", place: "Haflong, Dima Hasao", capacity: 350, occupied: 120, dist: "3.2 km" },
      { name: "Mahur Community Centre", place: "Mahur, Dima Hasao", capacity: 200, occupied: 55, dist: "5.4 km" },
    ],
    trend7: [38, 41, 44, 49, 53, 57, 61],
    trend30: [25, 28, 30, 33, 36, 35, 39, 42, 40, 44, 47, 45, 48, 50, 52, 51, 54, 53, 55, 57, 56, 58, 59, 58, 60, 59, 61, 60, 62, 61],
  },
  cachar: {
    name: "Cachar",
    score: 34,
    confidence: 94,
    predHeadline: "No critical displacement detected",
    predMeta: "Next model cycle in 15 minutes",
    rain: 28,
    rainSeries: [18, 22, 20, 25, 24, 30, 28],
    soil: 41,
    rainThreshold: 55,
    zones: [
      { id: "CA-2", tone: "green", title: "CA-2 Silchar Bench", score: 31, action: "Stable", dist: "1.5 km", x: 160, y: 175 },
      { id: "CA-4", tone: "green", title: "CA-4 Barak Escarpment", score: 38, action: "Stable", dist: "3.8 km", x: 220, y: 150 },
      { id: "CA-7", tone: "amber", title: "CA-7 Soft Cut", score: 52, action: "Monitor", dist: "5.2 km", x: 280, y: 135 },
    ],
    sensors: [
      { id: "CA-S01", name: "Incline", status: "online", unit: "°", value: 0.8, x: 155, y: 170 },
      { id: "CA-S02", name: "Pore Pressure", status: "online", unit: "kPa", value: 22, x: 215, y: 145 },
      { id: "CA-S03", name: "Rain Gauge", status: "online", unit: "mm", value: 28, x: 270, y: 130 },
      { id: "CA-S04", name: "Soil Probe", status: "online", unit: "%", value: 41, x: 120, y: 200 },
    ],
    route: {
      title: "Standby Route",
      path: "Silchar Ring → Tarapur → Silchar Indoor Stadium",
      eta: "12 min",
      steps: ["Use Tarapur connector if advisory escalates", "Avoid soft-cut shoulders after heavy rain", "Check in at Silchar Indoor Stadium"],
    },
    shelters: [
      { name: "Silchar Indoor Stadium", place: "Silchar, Cachar", capacity: 500, occupied: 40, dist: "2.8 km" },
      { name: "Tarapur High School", place: "Tarapur, Cachar", capacity: 220, occupied: 18, dist: "4.1 km" },
    ],
    trend7: [40, 38, 36, 35, 33, 34, 34],
    trend30: [45, 44, 42, 41, 40, 39, 38, 40, 37, 36, 35, 34, 36, 35, 33, 34, 32, 33, 35, 34, 33, 32, 34, 35, 33, 34, 33, 34, 35, 34],
  },
  karbi: {
    name: "Karbi Anglong",
    score: 82,
    confidence: 89,
    predHeadline: "Cascading failure risk on Diphu scarp",
    predMeta: "Estimated failure window: 4 to 10 hours",
    rain: 94,
    rainSeries: [40, 52, 61, 70, 78, 90, 94],
    soil: 81,
    rainThreshold: 60,
    zones: [
      { id: "KA-1", tone: "red", title: "KA-1 Diphu Scarp", score: 88, action: "Evacuate", dist: "0.6 km", x: 175, y: 145 },
      { id: "KA-4", tone: "red", title: "KA-4 Hamren Spur", score: 79, action: "Evacuate", dist: "2.9 km", x: 245, y: 160 },
      { id: "KA-9", tone: "amber", title: "KA-9 Watch Bench", score: 61, action: "Watch", dist: "4.7 km", x: 300, y: 125 },
    ],
    sensors: [
      { id: "KA-S01", name: "Incline", status: "warn", unit: "°", value: 3.8, x: 170, y: 140 },
      { id: "KA-S02", name: "Pore Pressure", status: "online", unit: "kPa", value: 61, x: 240, y: 155 },
      { id: "KA-S03", name: "Vibration", status: "online", unit: "mm/s", value: 3.6, x: 295, y: 120 },
      { id: "KA-S04", name: "Extensometer", status: "offline", unit: "mm", value: null, x: 115, y: 185 },
    ],
    route: {
      title: "Primary Route",
      path: "Diphu Ridge → Stadium Road → Diphu Indoor Stadium",
      eta: "11 min",
      steps: ["Immediate departure from KA-1 / KA-4 corridors", "Use Stadium Road only", "Register at Diphu Indoor Stadium"],
    },
    shelters: [
      { name: "Diphu Indoor Stadium", place: "Diphu, Karbi Anglong", capacity: 480, occupied: 310, dist: "1.9 km" },
      { name: "Hamren Relief Camp", place: "Hamren, Karbi Anglong", capacity: 240, occupied: 150, dist: "3.6 km" },
    ],
    trend7: [48, 55, 60, 68, 74, 79, 82],
    trend30: [32, 35, 38, 40, 44, 47, 50, 48, 52, 55, 58, 60, 59, 63, 66, 68, 70, 69, 72, 74, 73, 76, 78, 77, 79, 80, 81, 80, 82, 82],
  },
};

const ADMIN_KEY = "bhoomi-chetna-admin-v1";
const AUTH_SESSION_KEY = "bhoomi-chetna-session-v1";
const AUTH_ACCOUNTS_KEY = "bhoomi-chetna-accounts-v1";

/** SHA-256 of the owner master PIN. Plaintext PIN is never shipped in the app. */
const OWNER_PIN_HASH =
  "540e3100b7ac7ff7b27c34571e46a11062844cc4e575ec6069ca24caa682e038";

const DEFAULT_ADMIN = {
  highScore: 70,
  watchScore: 50,
  rainThreshold: 65,
  soilThreshold: 70,
  autoSms: false,
  sirenArmed: true,
  operatorId: "op-1",
  officers: [
    { id: "op-1", name: "ASDMA Controller", role: "Duty desk" },
    { id: "op-2", name: "District Officer", role: "Kamrup Metro" },
    { id: "op-3", name: "Field Lead", role: "Karbi Anglong" },
  ],
  maintenance: {},
  archive: [],
};

function loadAdmin() {
  try {
    const raw = localStorage.getItem(ADMIN_KEY);
    if (!raw) return structuredClone(DEFAULT_ADMIN);
    return { ...structuredClone(DEFAULT_ADMIN), ...JSON.parse(raw) };
  } catch {
    return structuredClone(DEFAULT_ADMIN);
  }
}

function saveAdmin() {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(state.admin));
}

const state = {
  district: "guwahati",
  view: "home",
  layer: "risk",
  trendRange: "7d",
  sirenOn: false,
  updatedAt: Date.now(),
  notifications: [],
  broadcastLog: [],
  live: null,
  admin: loadAdmin(),
  lastRiskClass: null,
  session: loadSession(),
  get authed() {
    return Boolean(this.session);
  },
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function levelFromScore(score) {
  const high = state.admin.highScore;
  const watch = state.admin.watchScore;
  if (score >= high) return { level: "HIGH RISK", cls: "high", pill: "HIGH" };
  if (score >= watch) return { level: "WATCH", cls: "watch", pill: "WATCH" };
  return { level: "STABLE", cls: "safe", pill: "STABLE" };
}

function riskColor(score) {
  const lvl = levelFromScore(score);
  if (lvl.cls === "high") return "#d64545";
  if (lvl.cls === "watch") return "#c9962a";
  return "#2f9e6b";
}

function cloneLive(key) {
  const base = DISTRICT_DATA[key];
  const live = {
    ...structuredClone(base),
    key,
    rainThreshold: state.admin.rainThreshold,
  };
  live.sensors = live.sensors.map((s) => {
    if (state.admin.maintenance[s.id]) {
      return { ...s, status: "offline", value: null, maintenance: true };
    }
    return { ...s, maintenance: false };
  });
  return live;
}

function formatUpdated(ms) {
  const sec = Math.max(1, Math.round((Date.now() - ms) / 1000));
  if (sec < 60) return `Simulated · updated ${sec}s ago`;
  return `Simulated · updated ${Math.round(sec / 60)}m ago`;
}

function toast(message) {
  const el = $("#toast");
  el.hidden = false;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 3200);
}

function mapMarkup(d, canvasId) {
  const topZone = [...d.zones].sort((a, b) => b.score - a.score)[0];
  const zoneLvl = levelFromScore(topZone.score);
  const sensorPins = d.sensors
    .map((s) => {
      const color = s.status === "online" ? "#2F9E6B" : s.status === "warn" ? "#C9962A" : "#D64545";
      return `<g class="pin ${s.status}" transform="translate(${s.x},${s.y})" data-sensor="${s.id}">
        <circle r="7" fill="#0D141C"/><circle r="3.5" fill="${color}"/>
      </g>`;
    })
    .join("");

  const routePaths = d.zones
    .filter((z) => z.tone === "red" || z.tone === "amber")
    .slice(0, 2)
    .map((z, i) => {
      const endX = 180 + i * 70;
      const endY = 220 - i * 12;
      return `<path d="M${z.x} ${z.y} C${(z.x + endX) / 2} ${z.y + 30} ${(z.x + endX) / 2} ${endY - 20} ${endX} ${endY}" stroke="#5EB0D0" stroke-width="${i ? 2 : 2.5}" stroke-dasharray="5 4" fill="none"/>
        <g transform="translate(${endX},${endY})">
          <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#0D141C" stroke="#5EB0D0"/>
          <path d="M-6 2 V-2 H6 V2" stroke="#5EB0D0" stroke-width="1.5" fill="none"/>
        </g>`;
    })
    .join("");

  const riskEllipses = d.zones
    .map((z) => {
      const fill =
        z.tone === "red"
          ? `url(#riskRed-${canvasId})`
          : z.tone === "amber"
            ? `url(#riskAmber-${canvasId})`
            : `url(#riskGreen-${canvasId})`;
      return `<ellipse class="zone zone-${z.tone}" cx="${z.x}" cy="${z.y}" rx="42" ry="30" fill="${fill}"/>`;
    })
    .join("");

  return `
    <svg class="terrain" viewBox="0 0 360 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky-${canvasId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0E1A2B"/><stop offset="100%" stop-color="#152538"/>
        </linearGradient>
        <linearGradient id="hillA-${canvasId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1E3A34"/><stop offset="100%" stop-color="#12241F"/>
        </linearGradient>
        <linearGradient id="hillB-${canvasId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#243B4A"/><stop offset="100%" stop-color="#142230"/>
        </linearGradient>
        <radialGradient id="riskRed-${canvasId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#D64545" stop-opacity=".22"/><stop offset="100%" stop-color="#D64545" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="riskAmber-${canvasId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#C9962A" stop-opacity=".18"/><stop offset="100%" stop-color="#C9962A" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="riskGreen-${canvasId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2F9E6B" stop-opacity=".14"/><stop offset="100%" stop-color="#2F9E6B" stop-opacity="0"/>
        </radialGradient>
        <pattern id="grid-${canvasId}" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(120,160,200,.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="360" height="280" fill="url(#sky-${canvasId})"/>
      <rect width="360" height="280" fill="url(#grid-${canvasId})"/>
      <path d="M0 190 C40 150 70 140 110 155 C150 170 170 130 210 125 C250 120 280 145 320 135 C340 130 355 140 360 145 V280 H0 Z" fill="url(#hillB-${canvasId})"/>
      <path d="M0 220 C55 185 95 200 140 195 C190 190 220 160 270 170 C300 176 330 165 360 175 V280 H0 Z" fill="url(#hillA-${canvasId})"/>
      <path d="M40 280 C70 240 90 220 130 200 C170 180 200 190 230 170 C260 150 290 140 340 110" fill="none" stroke="#3BA4C8" stroke-opacity=".22" stroke-width="2"/>
      <g class="zones layer-risk">${riskEllipses}</g>
      <g class="routes layer-routes" opacity="0">${routePaths}</g>
      <g class="sensors layer-sensors">${sensorPins}</g>
      <text x="20" y="34" fill="#8BA0B8" font-size="10" font-family="IBM Plex Sans, sans-serif" letter-spacing="0.04em">ASSAM · DISTRICT SCHEMATIC</text>
      <text x="20" y="52" fill="#E6EBF2" font-size="14" font-family="Barlow, IBM Plex Sans, sans-serif" font-weight="700">${d.name}</text>
    </svg>
    <div class="map-legend">
      <span><i class="dot red"></i>High</span>
      <span><i class="dot amber"></i>Watch</span>
      <span><i class="dot green"></i>Stable</span>
    </div>
    <div class="map-float risk-pill ${zoneLvl.cls === "high" ? "" : zoneLvl.cls}">
      <span class="label">Zone ${topZone.id}</span>
      <strong>${zoneLvl.pill}</strong>
    </div>`;
}

function applyLayer(root, layer) {
  const risk = $(".layer-risk", root);
  const sensors = $(".layer-sensors", root);
  const routes = $$(".layer-routes", root);
  if (!risk) return;
  if (layer === "risk") {
    risk.style.opacity = "1";
    if (sensors) sensors.style.opacity = "1";
    routes.forEach((r) => (r.style.opacity = "0"));
  } else if (layer === "sensors") {
    risk.style.opacity = "0.35";
    if (sensors) sensors.style.opacity = "1";
    routes.forEach((r) => (r.style.opacity = "0"));
  } else {
    risk.style.opacity = "0.4";
    if (sensors) sensors.style.opacity = "0.35";
    routes.forEach((r) => (r.style.opacity = "1"));
  }
}

function renderMaps() {
  const d = state.live;
  const home = $("#mapCanvasHome");
  const full = $("#mapCanvasFull");
  home.innerHTML = mapMarkup(d, "home");
  full.innerHTML = mapMarkup(d, "full");
  applyLayer(home, state.layer);
  applyLayer(full, state.layer);

  const detail = $("#mapDetail");
  const top = [...d.zones].sort((a, b) => b.score - a.score)[0];
  detail.innerHTML = `<h3>${top.title}</h3>
    <p>Risk score ${top.score} · ${top.action}. Distance ${top.dist}. Schematic overlay: <strong>${state.layer}</strong>. Map is illustrative, not live GIS imagery.</p>`;
}

function renderTrend() {
  const d = state.live;
  const values = state.trendRange === "30d" ? d.trend30 : d.trend7;
  const w = 320;
  const h = 110;
  const pad = 8;
  const max = Math.max(...values, 100);
  const min = Math.min(...values, 0);
  const span = Math.max(max - min, 1);
  const pts = values.map((v, i) => {
    const x = pad + (i * (w - pad * 2)) / (values.length - 1);
    const y = h - pad - ((v - min) / span) * (h - pad * 2);
    return [x, y];
  });
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${pts.at(-1)[0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`;
  $("#trendLine").setAttribute("d", line);
  $("#trendArea").setAttribute("d", area);
  const color = riskColor(values.at(-1));
  $("#trendLine").setAttribute("stroke", color);
  $("#trendArea").setAttribute("fill", color === "#d64545" ? "rgba(214,69,69,.12)" : color === "#c9962a" ? "rgba(201,150,42,.12)" : "rgba(47,158,107,.12)");

  if (state.trendRange === "7d") {
    $("#trendLabels").innerHTML = "<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Today</span>";
  } else {
    $("#trendLabels").innerHTML = "<span>Day 1</span><span>Day 10</span><span>Day 20</span><span>Today</span>";
  }

  $("#trendMeta").textContent =
    d.score >= 70
      ? `District risk index at ${d.score} after sustained monsoon rainfall.`
      : d.score >= 50
        ? `Watch band held by soil saturation at ${Math.round(d.soil)}%.`
        : `Risk index stable at ${d.score} within operating limits.`;
}

function renderHome() {
  const d = state.live;
  const lvl = levelFromScore(d.score);
  const top = [...d.zones].sort((a, b) => b.score - a.score)[0];

  const alertTitle =
    lvl.cls === "high"
      ? `HIGH RISK ALERT · ${d.name}`
      : lvl.cls === "watch"
        ? `WATCH ADVISORY · ${d.name}`
        : `STABLE · ${d.name}`;
  const alertCopy =
    lvl.cls === "high"
      ? `Slope assessment shows rising failure probability. Evacuate ${top.title}.`
      : lvl.cls === "watch"
        ? `Soil saturation is elevating cut-slope risk near ${top.title}. Restrict hill traffic.`
        : `No critical slope movement recorded. Continue routine sensor checks.`;

  $("#alertTitle").textContent = alertTitle;
  $("#alertCopy").textContent = alertCopy;

  const alert = $("#alertStrip");
  const cta = $("#viewAlert");
  alert.classList.remove("level-watch", "level-safe");
  if (lvl.cls === "safe") {
    alert.classList.add("level-safe");
    cta.textContent = "View";
  } else if (lvl.cls === "watch") {
    alert.classList.add("level-watch");
    cta.textContent = "Review";
  } else {
    cta.textContent = "Act";
  }

  $("#scoreValue").textContent = Math.round(d.score);
  const scoreFill = $("#scoreFill");
  if (scoreFill) {
    scoreFill.style.width = `${d.score}%`;
    scoreFill.style.background = riskColor(d.score);
  }
  $("#scoreRing")?.classList.toggle("tone-high", lvl.cls === "high");
  $("#scoreRing")?.classList.toggle("tone-watch", lvl.cls === "watch");
  $("#scoreRing")?.classList.toggle("tone-safe", lvl.cls === "safe");
  $("#riskLevel").textContent = lvl.level;
  $("#riskLevel").className = `level ${lvl.cls}`;
  $("#riskMeta").textContent = `Confidence ${d.confidence}% · ${formatUpdated(state.updatedAt)}`;

  $("#predHeadline").textContent = d.predHeadline;
  $("#predMeta").textContent = d.predMeta;
  const predFill = $("#predBarFill");
  predFill.style.width = `${d.score}%`;
  predFill.className = lvl.cls === "high" ? "" : lvl.cls;

  $("#rainValue").textContent = Math.round(d.rain);
  $("#rainChart").innerHTML = d.rainSeries
    .map((v) => `<span style="--h:${Math.max(12, (v / Math.max(...d.rainSeries)) * 100)}%"></span>`)
    .join("");
  const rainMeta = $("#rainMeta");
  if (d.rain >= d.rainThreshold) {
    rainMeta.textContent = `Above threshold (${d.rainThreshold} mm)`;
    rainMeta.className = "meta warn-text";
  } else {
    rainMeta.textContent = `Below threshold (${d.rainThreshold} mm)`;
    rainMeta.className = "meta ok-text";
  }

  $("#soilValue").textContent = Math.round(d.soil);
  $("#soilFill").style.width = `${d.soil}%`;
  const soilMeta = $("#soilMeta");
  const soilThr = state.admin.soilThreshold;
  if (d.soil >= soilThr) {
    soilMeta.textContent = `Above soil threshold (${soilThr}%)`;
    soilMeta.className = "meta warn-text";
  } else if (d.soil >= soilThr - 15) {
    soilMeta.textContent = "Moisture elevated";
    soilMeta.className = "meta warn-text";
  } else {
    soilMeta.textContent = "Moisture within range";
    soilMeta.className = "meta ok-text";
  }

  const activeZones = d.zones.filter((z) => z.tone !== "green");
  $("#zoneCount").textContent = `${activeZones.length} active`;
  $("#zoneList").innerHTML = d.zones
    .map(
      (z) => `<li data-zone="${z.id}">
      <span class="z-dot ${z.tone}"></span>
      <div><strong>${z.title}</strong><p>Score ${z.score} · ${z.action}</p></div>
      <em>${z.dist}</em>
    </li>`
    )
    .join("");

  $$("#zoneList li").forEach((li) => {
    li.addEventListener("click", () => {
      navigate("map");
      toast(`Map focused on ${li.dataset.zone}`);
    });
  });

  renderTrend();
}

function renderSensors() {
  const d = state.live;
  const online = d.sensors.filter((s) => s.status === "online").length;
  const warn = d.sensors.filter((s) => s.status === "warn").length;
  const offline = d.sensors.filter((s) => s.status === "offline").length;
  $("#sensorSummary").innerHTML = `
    <span class="stat-pill">${d.sensors.length} sensors</span>
    <span class="stat-pill" style="color:var(--safe)">${online} online</span>
    <span class="stat-pill" style="color:var(--watch)">${warn} degraded</span>
    <span class="stat-pill" style="color:var(--danger)">${offline} offline</span>`;

  $("#sensorGrid").innerHTML = d.sensors
    .map((s) => {
      const detail =
        s.status === "offline"
          ? "Offline · last packet lost"
          : `${s.status === "warn" ? "Degraded" : "Online"} · ${s.value}${s.unit}`;
      return `<div class="sensor ${s.status}" data-sensor="${s.id}">
        <div class="sensor-top"><span>${s.id}</span><i></i></div>
        <strong>${s.name}</strong>
        <p>${detail}</p>
      </div>`;
    })
    .join("");

  const health = [
    { label: "Nodes up", value: Math.round((online / Math.max(d.sensors.length, 1)) * 100), color: "var(--safe)" },
    { label: "Degraded", value: Math.round((warn / Math.max(d.sensors.length, 1)) * 100), color: "var(--watch)" },
    { label: "Offline", value: Math.round((offline / Math.max(d.sensors.length, 1)) * 100), color: "var(--danger)" },
  ];
  $("#healthBars").innerHTML = health
    .map(
      (h) => `<div class="health-row">
      <span>${h.label}</span>
      <div class="bar"><span style="width:${Math.max(h.value, 2)}%;background:${h.color}"></span></div>
      <em>${h.value}%</em>
    </div>`
    )
    .join("");

  $("#telemetryList").innerHTML = d.sensors
    .map((s) => {
      const reading = s.status === "offline" ? "No signal (demo)" : `${s.value}${s.unit}`;
      return `<li>
        <span class="z-dot ${s.status === "online" ? "green" : s.status === "warn" ? "amber" : "red"}"></span>
        <div><strong>${s.id} · ${s.name}</strong><p>${formatUpdated(state.updatedAt)}</p></div>
        <em>${reading}</em>
      </li>`;
    })
    .join("");

  $$("#sensorGrid .sensor").forEach((el) => {
    el.addEventListener("click", () => {
      $$("#sensorGrid .sensor").forEach((s) => s.classList.remove("selected"));
      el.classList.add("selected");
      toast(`Sensor ${el.dataset.sensor} selected`);
    });
  });
}

function renderRelief() {
  const d = state.live;
  $("#routeCard").innerHTML = `<div>
      <strong>${d.route.title}</strong>
      <p>${d.route.path}</p>
    </div>
    <span class="eta">${d.route.eta}</span>`;
  $("#routeSteps").innerHTML = d.route.steps.map((s) => `<li>${s}</li>`).join("");
  $("#shelterCount").textContent = `${d.shelters.length} nearby`;
  $("#shelterList").innerHTML = d.shelters
    .map((s) => {
      const free = s.capacity - s.occupied;
      return `<div class="shelter">
        <div>
          <strong>${s.name}</strong>
          <p>${s.place}</p>
          <span>Cap. ${s.capacity} · ${free} free · ${s.dist}</span>
        </div>
        <button type="button" data-shelter="${s.name}">Navigate</button>
      </div>`;
    })
    .join("");

  $$("#shelterList button").forEach((btn) => {
    btn.addEventListener("click", () => toast(`Directions opened for ${btn.dataset.shelter}`));
  });

  $("#broadcastLog").innerHTML = state.broadcastLog.length
    ? state.broadcastLog
        .slice(0, 6)
        .map((e) => `<li>${e.time} · ${e.message}</li>`)
        .join("")
    : `<li>No broadcasts issued this session.</li>`;

  const locked = !state.authed;
  $("#broadcastControls").classList.toggle("locked", locked);
  $("#sirenBtn").disabled = locked;
  $("#smsBtn").disabled = locked;
  $("#broadcastLockNote").hidden = !locked;
  $("#broadcastLockNote").textContent = "Sign in required to operate sirens or SMS.";

  const siren = $("#sirenBtn");
  siren.classList.toggle("active-siren", state.sirenOn);
  siren.querySelector("span").textContent = state.sirenOn ? "Siren Active" : "Activate Siren";
  $("#controlNote").textContent = !state.authed
    ? "Sign in with a controller ID/PIN or the owner master PIN to unlock broadcast controls."
    : state.sirenOn
      ? `Siren log active for ${d.name}. Not linked to field hardware.`
      : "Controls log locally · not linked to field hardware or SMS carriers";
}

function buildNotifications() {
  const agesMin = [12, 28, 41];
  let i = 0;
  const items = Object.entries(DISTRICT_DATA).flatMap(([key, d]) => {
    const lvl = levelFromScore(d.score);
    if (lvl.cls === "safe") return [];
    const top = [...d.zones].sort((a, b) => b.score - a.score)[0];
    const age = agesMin[i % agesMin.length];
    i += 1;
    return [
      {
        id: `${key}-${top.id}`,
        district: key,
        title: `${lvl.level} · ${d.name}`,
        body: `${top.title} scored ${top.score}. ${top.action} recommended. (Demo alert)`,
        unread: true,
        at: Date.now() - age * 60000,
      },
    ];
  });
  state.notifications = items.sort((a, b) => b.at - a.at);
}

function renderNotifications() {
  const unread = state.notifications.filter((n) => n.unread).length;
  const badge = $("#notifBadge");
  badge.textContent = String(unread);
  badge.dataset.count = String(unread);

  $("#notifList").innerHTML = state.notifications.length
    ? state.notifications
        .map((n) => {
          const mins = Math.max(1, Math.round((Date.now() - n.at) / 60000));
          return `<li class="${n.unread ? "unread" : ""}" data-id="${n.id}" data-district="${n.district}">
            <strong>${n.title}</strong>
            <p>${n.body}</p>
            <time>${mins}m ago</time>
          </li>`;
        })
        .join("")
    : `<li><strong>All clear</strong><p>No active district alerts.</p></li>`;

  $$("#notifList li[data-id]").forEach((li) => {
    li.addEventListener("click", () => {
      const note = state.notifications.find((n) => n.id === li.dataset.id);
      if (note) note.unread = false;
      $("#district").value = li.dataset.district;
      setDistrict(li.dataset.district);
      $("#notifPanel").hidden = true;
      $("#notifBtn").setAttribute("aria-expanded", "false");
      navigate("home");
      renderNotifications();
    });
  });
}

function renderAdmin() {
  const a = state.admin;
  $("#thrHigh").value = a.highScore;
  $("#thrWatch").value = a.watchScore;
  $("#thrRain").value = a.rainThreshold;
  $("#thrSoil").value = a.soilThreshold;
  $("#thresholdNote").textContent = `Active bands: High ≥ ${a.highScore}, Watch ≥ ${a.watchScore}. Rain alert ${a.rainThreshold} mm. Soil alert ${a.soilThreshold}%.`;

  $("#operatorSelect").innerHTML = a.officers
    .map((o) => `<option value="${o.id}" ${o.id === a.operatorId ? "selected" : ""}>${o.name} · ${o.role}</option>`)
    .join("");

  $("#officerCount").textContent = `${a.officers.length} on roster`;
  $("#officerList").innerHTML = a.officers
    .map(
      (o) => `<li>
      <div><strong>${o.name}</strong><p>${o.role}</p></div>
      <button type="button" data-remove-officer="${o.id}" ${a.officers.length <= 1 ? "disabled" : ""}>Remove</button>
    </li>`
    )
    .join("");

  $$("[data-remove-officer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.removeOfficer;
      if (state.admin.officers.length <= 1) return;
      state.admin.officers = state.admin.officers.filter((o) => o.id !== id);
      if (state.admin.operatorId === id) state.admin.operatorId = state.admin.officers[0].id;
      saveAdmin();
      renderAdmin();
      toast("Officer removed from roster");
    });
  });

  const sensors = state.live.sensors;
  $("#adminSensorList").innerHTML = sensors
    .map((s) => {
      const inMaint = !!state.admin.maintenance[s.id];
      return `<div class="admin-sensor-row">
        <div>
          <strong>${s.id} · ${s.name}</strong>
          <p>${inMaint ? "Maintenance · offline" : s.status === "offline" ? "Fault · offline" : `Live · ${s.value}${s.unit}`}</p>
        </div>
        <button type="button" class="toggle ${inMaint ? "on" : ""}" data-maint="${s.id}" aria-pressed="${inMaint}">${inMaint ? "Maint." : "Active"}</button>
      </div>`;
    })
    .join("");

  $$("[data-maint]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.maint;
      if (state.admin.maintenance[id]) delete state.admin.maintenance[id];
      else state.admin.maintenance[id] = true;
      saveAdmin();
      state.live = cloneLive(state.district);
      renderAll();
      toast(state.admin.maintenance[id] ? `${id} set to maintenance` : `${id} returned to service`);
    });
  });

  const auto = $("#autoSmsToggle");
  auto.classList.toggle("on", a.autoSms);
  auto.setAttribute("aria-pressed", String(a.autoSms));
  auto.textContent = a.autoSms ? "On" : "Off";

  const arm = $("#sirenArmToggle");
  arm.classList.toggle("on", a.sirenArmed);
  arm.setAttribute("aria-pressed", String(a.sirenArmed));
  arm.textContent = a.sirenArmed ? "On" : "Off";

  const archive = [...a.archive, ...state.broadcastLog];
  $("#adminBroadcastLog").innerHTML = archive.length
    ? archive
        .slice(0, 12)
        .map((e) => `<li>${e.time} · ${e.message}</li>`)
        .join("")
    : `<li>No broadcast records yet.</li>`;
}

function loadSession() {
  try {
    const raw = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.role && parsed?.id) return { role: parsed.role, id: String(parsed.id) };
  } catch {
    /* ignore */
  }
  return null;
}

function persistSession() {
  if (!state.session) {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    return;
  }
  sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(state.session));
}

function loadAccounts() {
  try {
    const raw = localStorage.getItem(AUTH_ACCOUNTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveAccounts(list) {
  localStorage.setItem(AUTH_ACCOUNTS_KEY, JSON.stringify(list));
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(String(text));
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function syncAuthUI() {
  const btn = $("#authBtn");
  const adminTab = $("#adminTab");
  const tabbar = $(".tabbar");
  const accountsCard = $("#accountsCard");
  if (state.authed) {
    const label =
      state.session.role === "owner"
        ? "Owner"
        : `Controller · ${state.session.id}`;
    btn.textContent = `Sign out · ${label}`;
    btn.classList.add("signed-in");
    btn.title = `Signed in as ${label}`;
    adminTab.hidden = false;
    tabbar.classList.add("authed");
  } else {
    btn.textContent = "Sign in";
    btn.classList.remove("signed-in");
    btn.title = "Sign in to access Admin and broadcast controls";
    adminTab.hidden = true;
    tabbar.classList.remove("authed");
  }
  if (accountsCard) {
    accountsCard.hidden = !(state.session && state.session.role === "owner");
  }
  if (state.session?.role === "owner") renderAccountList();
}

function setAuthMode(mode) {
  const isOwner = mode === "owner";
  $("#tabController").classList.toggle("active", !isOwner);
  $("#tabOwner").classList.toggle("active", isOwner);
  $("#controllerForm").hidden = isOwner;
  $("#ownerForm").hidden = !isOwner;
  $("#authError").hidden = true;
  $("#ownerError").hidden = true;
}

function openAuthModal() {
  $("#authError").hidden = true;
  $("#ownerError").hidden = true;
  $("#authId").value = "";
  $("#authPin").value = "";
  $("#ownerPin").value = "";
  setAuthMode("controller");
  $("#authModal").hidden = false;
  setTimeout(() => $("#authId").focus(), 50);
}

function closeAuthModal() {
  $("#authModal").hidden = true;
  $("#ownerPin").value = "";
  $("#authPin").value = "";
}

function renderAccountList() {
  const list = $("#accountList");
  const empty = $("#accountEmpty");
  if (!list) return;
  const accounts = loadAccounts();
  list.innerHTML = "";
  if (!accounts.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  accounts.forEach((account) => {
    const row = document.createElement("div");
    row.className = "account-row";
    const meta = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = account.id;
    const span = document.createElement("span");
    span.className = "meta";
    span.textContent = ` · created ${new Date(account.createdAt).toLocaleString()}`;
    meta.append(strong, span);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn ghost compact";
    btn.dataset.revoke = account.id;
    btn.textContent = "Revoke";
    row.append(meta, btn);
    list.appendChild(row);
  });
}

async function signInController(id, pin) {
  const controllerId = String(id || "").trim();
  const pinValue = String(pin || "");
  if (!controllerId || !pinValue) {
    $("#authError").textContent = "Enter controller ID and PIN.";
    $("#authError").hidden = false;
    return false;
  }
  const accounts = loadAccounts();
  const account = accounts.find((a) => a.id.toLowerCase() === controllerId.toLowerCase());
  if (!account) {
    $("#authError").textContent = "Unknown controller ID. Ask the owner to create an account.";
    $("#authError").hidden = false;
    return false;
  }
  const hash = await sha256Hex(pinValue);
  if (hash !== account.pinHash) {
    $("#authError").textContent = "Invalid controller PIN.";
    $("#authError").hidden = false;
    return false;
  }
  state.session = { role: "controller", id: account.id };
  persistSession();
  closeAuthModal();
  syncAuthUI();
  renderRelief();
  toast(`Signed in as ${account.id}`);
  return true;
}

async function signInOwner(pin) {
  const pinValue = String(pin || "").trim();
  if (!pinValue) {
    $("#ownerError").textContent = "Paste the owner master PIN.";
    $("#ownerError").hidden = false;
    return false;
  }
  const hash = await sha256Hex(pinValue);
  if (hash !== OWNER_PIN_HASH) {
    $("#ownerError").textContent = "Invalid owner master PIN.";
    $("#ownerError").hidden = false;
    return false;
  }
  state.session = { role: "owner", id: "OWNER" };
  persistSession();
  closeAuthModal();
  syncAuthUI();
  renderRelief();
  if (state.view === "admin") renderAdmin();
  toast("Owner signed in");
  return true;
}

function signOut() {
  const wasAdmin = state.view === "admin";
  state.session = null;
  state.sirenOn = false;
  persistSession();
  syncAuthUI();
  renderRelief();
  if (wasAdmin) navigate("home");
  toast("Signed out");
}

async function createControllerAccount(id, pin) {
  if (state.session?.role !== "owner") {
    toast("Only the owner can create controller accounts");
    return false;
  }
  const controllerId = String(id || "").trim();
  const pinValue = String(pin || "");
  if (!/^[A-Za-z0-9._-]{3,32}$/.test(controllerId)) {
    toast("ID must be 3–32 chars (letters, numbers, . _ -)");
    return false;
  }
  if (pinValue.length < 8) {
    toast("Controller PIN must be at least 8 characters");
    return false;
  }
  const accounts = loadAccounts();
  if (accounts.some((a) => a.id.toLowerCase() === controllerId.toLowerCase())) {
    toast("That controller ID already exists");
    return false;
  }
  const pinHash = await sha256Hex(pinValue);
  accounts.push({ id: controllerId, pinHash, createdAt: Date.now() });
  saveAccounts(accounts);
  renderAccountList();
  toast(`Controller ${controllerId} created`);
  return true;
}

function revokeControllerAccount(id) {
  if (state.session?.role !== "owner") {
    toast("Only the owner can revoke accounts");
    return;
  }
  saveAccounts(loadAccounts().filter((a) => a.id !== id));
  renderAccountList();
  toast(`Revoked ${id}`);
}

function renderAll() {
  renderMaps();
  renderHome();
  renderSensors();
  renderRelief();
  renderNotifications();
  if (state.authed) renderAdmin();
  syncLayerChips();
  syncAuthUI();
}

function setDistrict(key) {
  state.district = key;
  state.live = cloneLive(key);
  state.updatedAt = Date.now();
  state.lastRiskClass = levelFromScore(state.live.score).cls;
  renderAll();
}

function navigate(view) {
  if (view === "admin" && !state.authed) {
    openAuthModal();
    toast("Sign-in required for Admin");
    return;
  }
  state.view = view;
  $$(".view").forEach((v) => {
    const active = v.dataset.view === view;
    v.classList.toggle("active", active);
    v.hidden = !active;
  });
  $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.nav === view));
  if (view === "map" || view === "home") {
    applyLayer($("#mapCanvasHome"), state.layer);
    applyLayer($("#mapCanvasFull"), state.layer);
  }
  if (view === "admin") renderAdmin();
  window.location.hash = view;
}

function syncLayerChips() {
  $$(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.layer === state.layer);
  });
}

function confirmAction({ title, body, confirmLabel = "Confirm" }) {
  return new Promise((resolve) => {
    const modal = $("#confirmModal");
    $("#modalTitle").textContent = title;
    $("#modalBody").textContent = body;
    $("#modalConfirm").textContent = confirmLabel;
    modal.hidden = false;

    const cleanup = (result) => {
      modal.hidden = true;
      $("#modalConfirm").onclick = null;
      $("#modalCancel").onclick = null;
      resolve(result);
    };
    $("#modalConfirm").onclick = () => cleanup(true);
    $("#modalCancel").onclick = () => cleanup(false);
  });
}

function currentOperator() {
  if (state.session?.role === "owner") {
    return { id: "OWNER", name: "Owner", role: "System owner" };
  }
  if (state.session?.role === "controller") {
    return { id: state.session.id, name: state.session.id, role: "Controller" };
  }
  return state.admin.officers.find((o) => o.id === state.admin.operatorId) || state.admin.officers[0];
}

function logBroadcast(message) {
  const time = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });
  const op = currentOperator();
  const entry = { time, message: `${message} · by ${op.name}` };
  state.broadcastLog.unshift(entry);
  state.admin.archive.unshift(entry);
  state.admin.archive = state.admin.archive.slice(0, 40);
  saveAdmin();
  renderRelief();
  if (state.view === "admin") renderAdmin();
}

function tickLive() {
  const d = state.live;
  if (!d) return;

  d.rain = Math.max(0, +(d.rain + (Math.random() * 0.6 - 0.2)).toFixed(1));
  d.soil = Math.min(100, Math.max(0, +(d.soil + (Math.random() * 0.5 - 0.2)).toFixed(1)));
  d.score = Math.min(99, Math.max(5, +(d.score + (Math.random() * 0.7 - 0.3)).toFixed(1)));
  d.rainThreshold = state.admin.rainThreshold;
  d.rainSeries = d.rainSeries.map((v, i) => (i === d.rainSeries.length - 1 ? Math.round(d.rain) : v));
  d.sensors = d.sensors.map((s) => {
    if (state.admin.maintenance[s.id]) return { ...s, status: "offline", value: null, maintenance: true };
    if (s.status === "offline" || s.value == null) return s;
    const delta = (Math.random() - 0.48) * (s.unit === "°" ? 0.04 : s.unit === "%" ? 0.3 : 0.25);
    return { ...s, value: Math.round((s.value + delta) * 10) / 10 };
  });

  const lvl = levelFromScore(d.score);
  if (lvl.cls === "high") {
    d.predHeadline = `Slope instability rising on ${d.zones[0].title.split(" ").slice(1).join(" ") || d.name}`;
    d.predMeta = "Estimated failure window: 4 to 12 hours";
  } else if (lvl.cls === "watch") {
    d.predHeadline = "Soil saturation elevating cut-slope risk";
    d.predMeta = `Escalate if 24h rainfall exceeds ${d.rainThreshold} mm`;
  } else {
    d.predHeadline = "No critical displacement detected";
    d.predMeta = "Next model cycle in 15 minutes";
  }

  if (state.lastRiskClass !== "high" && lvl.cls === "high" && state.admin.autoSms) {
    logBroadcast(`Auto SMS queued for ${d.name} high-risk crossing`);
    toast(`Auto SMS queued for ${d.name}`);
  }
  state.lastRiskClass = lvl.cls;

  state.updatedAt = Date.now();
  renderHome();
  renderSensors();
  if (state.view === "map") renderMaps();
  if (state.view === "admin") renderAdmin();
}

function setupEvents() {
  $("#district").addEventListener("change", (e) => setDistrict(e.target.value));

  $$(".tab").forEach((tab) => tab.addEventListener("click", () => navigate(tab.dataset.nav)));

  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.layer = chip.dataset.layer;
      syncLayerChips();
      applyLayer($("#mapCanvasHome"), state.layer);
      applyLayer($("#mapCanvasFull"), state.layer);
      const detail = $("#mapDetail");
      const top = [...state.live.zones].sort((a, b) => b.score - a.score)[0];
      detail.innerHTML = `<h3>${top.title}</h3>
        <p>Risk score ${top.score} · ${top.action}. Distance ${top.dist}. Schematic overlay: <strong>${state.layer}</strong>. Map is illustrative, not live GIS imagery.</p>`;
      toast(`${state.layer[0].toUpperCase()}${state.layer.slice(1)} layer shown`);
    });
  });

  $$(".seg").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".seg").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.trendRange = btn.dataset.range;
      renderTrend();
    });
  });

  $("#viewAlert").addEventListener("click", () => {
    navigate("map");
    state.layer = "risk";
    syncLayerChips();
    applyLayer($("#mapCanvasFull"), "risk");
    toast("Opened district hazard map");
  });

  $("#notifBtn").addEventListener("click", () => {
    const panel = $("#notifPanel");
    const open = panel.hidden;
    panel.hidden = !open;
    $("#notifBtn").setAttribute("aria-expanded", String(open));
  });

  $("#markReadBtn").addEventListener("click", () => {
    state.notifications.forEach((n) => (n.unread = false));
    renderNotifications();
    toast("Alerts marked as read");
  });

  document.addEventListener("click", (e) => {
    const panel = $("#notifPanel");
    if (panel.hidden) return;
    if (!panel.contains(e.target) && !$("#notifBtn").contains(e.target)) {
      panel.hidden = true;
      $("#notifBtn").setAttribute("aria-expanded", "false");
    }
  });

  $("#sirenBtn").addEventListener("click", async () => {
    if (!state.authed) {
      openAuthModal();
      toast("Sign-in required");
      return;
    }
    if (!state.admin.sirenArmed && !state.sirenOn) {
      toast("Siren arming is disabled in Admin");
      return;
    }
    if (state.sirenOn) {
      state.sirenOn = false;
      logBroadcast(`Sirens stopped in ${state.live.name}`);
      toast("Sirens stopped");
      renderRelief();
      return;
    }
    const ok = await confirmAction({
      title: "Activate community sirens?",
      body: `This logs a siren event for ${state.live.name}. It does not trigger field hardware.`,
      confirmLabel: "Activate Siren",
    });
    if (!ok) return;
    state.sirenOn = true;
    logBroadcast(`Sirens activated in ${state.live.name}`);
    toast("Sirens activated (log only)");
    renderRelief();
  });

  $("#smsBtn").addEventListener("click", async () => {
    if (!state.authed) {
      openAuthModal();
      toast("Sign-in required");
      return;
    }
    const recipients = state.live.shelters.reduce((sum, s) => sum + s.capacity, 0);
    const ok = await confirmAction({
      title: "Queue SMS advisory?",
      body: `This logs an SMS advisory for about ${recipients.toLocaleString("en-IN")} shelter-capacity contacts in ${state.live.name}. No message is sent to carriers.`,
      confirmLabel: "Queue SMS",
    });
    if (!ok) return;
    logBroadcast(`SMS queued · ${recipients.toLocaleString("en-IN")} capacity contacts`);
    toast("SMS queued (not sent)");
  });

  $("#authBtn").addEventListener("click", () => {
    if (state.authed) signOut();
    else openAuthModal();
  });

  $("#authCancel").addEventListener("click", closeAuthModal);
  $("#ownerCancel").addEventListener("click", closeAuthModal);

  $("#tabController").addEventListener("click", () => {
    setAuthMode("controller");
    setTimeout(() => $("#authId").focus(), 30);
  });
  $("#tabOwner").addEventListener("click", () => {
    setAuthMode("owner");
    setTimeout(() => $("#ownerPin").focus(), 30);
  });

  $("#controllerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = await signInController($("#authId").value, $("#authPin").value);
    if (ok) navigate("admin");
  });

  $("#ownerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = await signInOwner($("#ownerPin").value);
    if (ok) navigate("admin");
  });

  $("#authModal").addEventListener("click", (e) => {
    if (e.target === $("#authModal")) closeAuthModal();
  });

  $("#createAccountForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = await createControllerAccount($("#newCtrlId").value, $("#newCtrlPin").value);
    if (ok) e.target.reset();
  });

  $("#accountList")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-revoke]");
    if (!btn) return;
    revokeControllerAccount(btn.dataset.revoke);
  });

  $("#thresholdForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const high = Number($("#thrHigh").value);
    const watch = Number($("#thrWatch").value);
    const rain = Number($("#thrRain").value);
    const soil = Number($("#thrSoil").value);
    if (watch >= high) {
      toast("Watch threshold must be lower than high risk");
      return;
    }
    state.admin.highScore = high;
    state.admin.watchScore = watch;
    state.admin.rainThreshold = rain;
    state.admin.soilThreshold = soil;
    saveAdmin();
    state.live.rainThreshold = rain;
    renderAll();
    toast("Thresholds saved");
  });

  $("#officerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#officerName").value.trim();
    const role = $("#officerRole").value.trim();
    if (!name || !role) return;
    state.admin.officers.push({ id: `op-${Date.now()}`, name, role });
    $("#officerForm").reset();
    saveAdmin();
    renderAdmin();
    toast("Officer added");
  });

  $("#operatorSelect").addEventListener("change", (e) => {
    state.admin.operatorId = e.target.value;
    saveAdmin();
    toast(`Duty name set to ${currentOperator().name}`);
  });

  $("#autoSmsToggle").addEventListener("click", () => {
    state.admin.autoSms = !state.admin.autoSms;
    saveAdmin();
    renderAdmin();
    toast(state.admin.autoSms ? "Auto SMS enabled" : "Auto SMS disabled");
  });

  $("#sirenArmToggle").addEventListener("click", () => {
    state.admin.sirenArmed = !state.admin.sirenArmed;
    if (!state.admin.sirenArmed && state.sirenOn) {
      state.sirenOn = false;
      logBroadcast(`Sirens force-stopped · arming disabled`);
    }
    saveAdmin();
    renderAdmin();
    renderRelief();
    toast(state.admin.sirenArmed ? "Siren arming enabled" : "Siren arming disabled");
  });

  $("#resetAdminBtn").addEventListener("click", async () => {
    const ok = await confirmAction({
      title: "Reset admin settings?",
      body: "This restores default thresholds, clears maintenance flags, and keeps the default officer roster.",
      confirmLabel: "Reset",
    });
    if (!ok) return;
    state.admin = structuredClone(DEFAULT_ADMIN);
    saveAdmin();
    state.live = cloneLive(state.district);
    renderAll();
    toast("Admin settings reset");
  });

  $("#clearArchiveBtn").addEventListener("click", async () => {
    const ok = await confirmAction({
      title: "Clear broadcast archive?",
      body: "This removes saved broadcast records from this browser.",
      confirmLabel: "Clear",
    });
    if (!ok) return;
    state.admin.archive = [];
    state.broadcastLog = [];
    saveAdmin();
    renderRelief();
    renderAdmin();
    toast("Broadcast archive cleared");
  });

  window.addEventListener("hashchange", () => {
    const view = location.hash.replace("#", "");
    if (["home", "map", "sensors", "relief", "admin"].includes(view)) navigate(view);
  });
}

function init() {
  buildNotifications();
  state.live = cloneLive(state.district);
  state.lastRiskClass = levelFromScore(state.live.score).cls;
  setupEvents();
  renderAll();
  const initial = location.hash.replace("#", "");
  if (initial === "admin" && !state.authed) {
    navigate("home");
    openAuthModal();
  } else {
    navigate(["home", "map", "sensors", "relief", "admin"].includes(initial) ? initial : "home");
  }
  setInterval(tickLive, 7000);
  setInterval(() => {
    if (state.view === "home") $("#riskMeta").textContent = `Confidence ${state.live.confidence}% · ${formatUpdated(state.updatedAt)}`;
  }, 1000);
}

init();
