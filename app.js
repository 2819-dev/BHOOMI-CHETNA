/* BHOOMI CHETNA — ASDMA landslide early warning console
   Live rainfall / soil moisture: Open-Meteo
   Maps: OpenStreetMap via Leaflet
   Geotech nodes: awaiting ASDMA field feed link
*/

const DISTRICT_DATA = {
  guwahati: {
    name: "Guwahati Hills",
    center: [26.1833, 91.76],
    zoom: 12,
    hazardBias: 18,
    rainThreshold: 65,
    zones: [
      { id: "R-2", title: "Chandmari Slope", lat: 26.183, lng: 91.78, bias: 22, dist: "0.8 km", actionHigh: "Evacuate", actionWatch: "Watch" },
      { id: "R-5", title: "Kharghuli Ridge", lat: 26.195, lng: 91.768, bias: 10, dist: "2.1 km", actionHigh: "Evacuate", actionWatch: "Watch" },
      { id: "R-7", title: "Fatasil Cut", lat: 26.165, lng: 91.735, bias: 6, dist: "3.4 km", actionHigh: "Evacuate", actionWatch: "Monitor" },
    ],
    sensors: [
      { id: "GH-S01", name: "Incline", type: "geotech", unit: "°", lat: 26.184, lng: 91.779 },
      { id: "GH-S02", name: "Pore Pressure", type: "geotech", unit: "kPa", lat: 26.194, lng: 91.767 },
      { id: "GH-S03", name: "Extensometer", type: "geotech", unit: "mm", lat: 26.166, lng: 91.736 },
      { id: "GH-WX", name: "Open-Meteo station", type: "weather", unit: "mm", lat: 26.183, lng: 91.76 },
    ],
    route: {
      title: "Primary Route",
      path: "Chandmari → Zoo Road → Dispur Community Hall",
      eta: "14 min",
      steps: ["Assemble at Chandmari muster point", "Follow Zoo Road corridor", "Check in at Dispur Community Hall"],
      line: [
        [26.183, 91.78],
        [26.168, 91.77],
        [26.143, 91.79],
      ],
    },
    shelters: [
      { name: "Dispur Community Hall", place: "Dispur, Guwahati", capacity: 420, lat: 26.143, lng: 91.79, dist: "2.4 km" },
      { name: "Latasil Ground Camp", place: "Latasil, Guwahati", capacity: 280, lat: 26.185, lng: 91.755, dist: "3.1 km" },
      { name: "Chandmari School Block", place: "Chandmari, Guwahati", capacity: 160, lat: 26.181, lng: 91.776, dist: "1.1 km" },
    ],
  },
  dima: {
    name: "Dima Hasao",
    center: [25.18, 93.02],
    zoom: 11,
    hazardBias: 12,
    rainThreshold: 40,
    zones: [
      { id: "DH-3", title: "Haflong Cut", lat: 25.164, lng: 93.017, bias: 14, dist: "1.2 km", actionHigh: "Evacuate", actionWatch: "Watch" },
      { id: "DH-1", title: "Mahur Ridge", lat: 25.212, lng: 93.115, bias: 8, dist: "4.0 km", actionHigh: "Evacuate", actionWatch: "Monitor" },
      { id: "DH-6", title: "Stable Bench", lat: 25.14, lng: 92.98, bias: -6, dist: "6.5 km", actionHigh: "Watch", actionWatch: "Stable" },
    ],
    sensors: [
      { id: "DH-S01", name: "Incline", type: "geotech", unit: "°", lat: 25.165, lng: 93.016 },
      { id: "DH-S02", name: "Soil Probe", type: "geotech", unit: "%", lat: 25.17, lng: 93.01 },
      { id: "DH-WX", name: "Open-Meteo station", type: "weather", unit: "mm", lat: 25.18, lng: 93.02 },
    ],
    route: {
      title: "Primary Route",
      path: "Haflong Bazaar → NH-27 → Haflong Town Hall",
      eta: "18 min",
      steps: ["Leave hillside settlements via signed egress", "Merge onto NH-27 southbound", "Report at Haflong Town Hall"],
      line: [
        [25.164, 93.017],
        [25.17, 93.03],
        [25.175, 93.04],
      ],
    },
    shelters: [
      { name: "Haflong Town Hall", place: "Haflong, Dima Hasao", capacity: 350, lat: 25.175, lng: 93.04, dist: "3.2 km" },
      { name: "Mahur Community Centre", place: "Mahur, Dima Hasao", capacity: 200, lat: 25.21, lng: 93.11, dist: "5.4 km" },
    ],
  },
  cachar: {
    name: "Cachar",
    center: [24.833, 92.778],
    zoom: 11,
    hazardBias: 4,
    rainThreshold: 55,
    zones: [
      { id: "CA-2", title: "Silchar Bench", lat: 24.82, lng: 92.8, bias: -4, dist: "1.5 km", actionHigh: "Watch", actionWatch: "Stable" },
      { id: "CA-4", title: "Barak Escarpment", lat: 24.86, lng: 92.76, bias: 2, dist: "3.8 km", actionHigh: "Watch", actionWatch: "Stable" },
      { id: "CA-7", title: "Soft Cut", lat: 24.85, lng: 92.74, bias: 8, dist: "5.2 km", actionHigh: "Evacuate", actionWatch: "Monitor" },
    ],
    sensors: [
      { id: "CA-S01", name: "Incline", type: "geotech", unit: "°", lat: 24.825, lng: 92.795 },
      { id: "CA-S02", name: "Pore Pressure", type: "geotech", unit: "kPa", lat: 24.855, lng: 92.765 },
      { id: "CA-WX", name: "Open-Meteo station", type: "weather", unit: "mm", lat: 24.833, lng: 92.778 },
    ],
    route: {
      title: "Standby Route",
      path: "Silchar Ring → Tarapur → Silchar Indoor Stadium",
      eta: "12 min",
      steps: ["Use Tarapur connector if advisory escalates", "Avoid soft-cut shoulders after heavy rain", "Check in at Silchar Indoor Stadium"],
      line: [
        [24.83, 92.78],
        [24.825, 92.79],
        [24.82, 92.8],
      ],
    },
    shelters: [
      { name: "Silchar Indoor Stadium", place: "Silchar, Cachar", capacity: 500, lat: 24.82, lng: 92.8, dist: "2.8 km" },
      { name: "Tarapur High School", place: "Tarapur, Cachar", capacity: 220, lat: 24.84, lng: 92.79, dist: "4.1 km" },
    ],
  },
  karbi: {
    name: "Karbi Anglong",
    center: [25.844, 93.431],
    zoom: 11,
    hazardBias: 20,
    rainThreshold: 60,
    zones: [
      { id: "KA-1", title: "Diphu Scarp", lat: 25.842, lng: 93.431, bias: 24, dist: "0.6 km", actionHigh: "Evacuate", actionWatch: "Watch" },
      { id: "KA-4", title: "Hamren Spur", lat: 25.9, lng: 92.98, bias: 16, dist: "2.9 km", actionHigh: "Evacuate", actionWatch: "Watch" },
      { id: "KA-9", title: "Watch Bench", lat: 25.86, lng: 93.45, bias: 8, dist: "4.7 km", actionHigh: "Evacuate", actionWatch: "Watch" },
    ],
    sensors: [
      { id: "KA-S01", name: "Incline", type: "geotech", unit: "°", lat: 25.843, lng: 93.43 },
      { id: "KA-S02", name: "Pore Pressure", type: "geotech", unit: "kPa", lat: 25.845, lng: 93.435 },
      { id: "KA-WX", name: "Open-Meteo station", type: "weather", unit: "mm", lat: 25.844, lng: 93.431 },
    ],
    route: {
      title: "Primary Route",
      path: "Diphu Ridge → Stadium Road → Diphu Indoor Stadium",
      eta: "11 min",
      steps: ["Immediate departure from KA-1 / KA-4 corridors", "Use Stadium Road only", "Register at Diphu Indoor Stadium"],
      line: [
        [25.842, 93.431],
        [25.84, 93.435],
        [25.838, 93.44],
      ],
    },
    shelters: [
      { name: "Diphu Indoor Stadium", place: "Diphu, Karbi Anglong", capacity: 480, lat: 25.838, lng: 93.44, dist: "1.9 km" },
      { name: "Hamren Relief Camp", place: "Hamren, Karbi Anglong", capacity: 240, lat: 25.9, lng: 92.98, dist: "3.6 km" },
    ],
  },
};

const ADMIN_KEY = "bhoomi-chetna-admin-v1";
const AUTH_SESSION_KEY = "bhoomi-chetna-session-v1";
const AUTH_ACCOUNTS_KEY = "bhoomi-chetna-accounts-v1";
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

const maps = {
  home: null,
  full: null,
  layers: { home: null, full: null },
};

const weatherCache = {};

const state = {
  district: "guwahati",
  view: "home",
  layer: "risk",
  trendRange: "7d",
  sirenOn: false,
  updatedAt: Date.now(),
  feedStatus: "connecting",
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

function soilToPercent(m3) {
  if (m3 == null || Number.isNaN(m3)) return 0;
  // Open-Meteo volumetric moisture ~0.05–0.55; map onto 0–100 for ops thresholds
  return Math.min(100, Math.max(0, Math.round(((m3 - 0.05) / 0.4) * 100)));
}

function computeScore(rain24, soilPct, hazardBias, rainThr, soilThr) {
  const rainPart = Math.min(55, (rain24 / Math.max(1, rainThr)) * 55);
  const soilPart = Math.min(30, (soilPct / Math.max(1, soilThr)) * 30);
  return Math.min(99, Math.max(5, Math.round(rainPart + soilPart + hazardBias)));
}

function zoneAction(score, zone) {
  const lvl = levelFromScore(score);
  if (lvl.cls === "high") return zone.actionHigh;
  if (lvl.cls === "watch") return zone.actionWatch;
  return "Stable";
}

function buildLive(key, weather) {
  const base = DISTRICT_DATA[key];
  const rainThr = state.admin.rainThreshold || base.rainThreshold;
  const soilThr = state.admin.soilThreshold;
  const rain24 = weather?.rain24 ?? 0;
  const soilPct = weather?.soilPct ?? 0;
  const score = computeScore(rain24, soilPct, base.hazardBias, rainThr, soilThr);
  const lvl = levelFromScore(score);

  const zones = base.zones.map((z) => {
    const zScore = Math.min(99, Math.max(5, score + Math.round(z.bias * 0.35)));
    const zLvl = levelFromScore(zScore);
    return {
      ...z,
      score: zScore,
      tone: zLvl.cls === "high" ? "red" : zLvl.cls === "watch" ? "amber" : "green",
      action: zoneAction(zScore, z),
    };
  });

  const sensors = base.sensors.map((s) => {
    if (state.admin.maintenance[s.id]) {
      return { ...s, status: "offline", value: null, maintenance: true, note: "Maintenance" };
    }
    if (s.type === "weather") {
      return {
        ...s,
        status: weather ? "online" : "warn",
        value: weather ? Math.round(rain24) : null,
        note: weather ? "Live Open-Meteo" : "Weather feed retrying",
        maintenance: false,
      };
    }
    return {
      ...s,
      status: "offline",
      value: null,
      note: "Awaiting ASDMA geotech link",
      maintenance: false,
    };
  });

  let predHeadline;
  let predMeta;
  if (lvl.cls === "high") {
    predHeadline = `High rainfall and soil load on ${zones[0].title}`;
    predMeta = `24h rain ${Math.round(rain24)} mm · soil ${soilPct}% · thresholds ${rainThr} mm / ${soilThr}%`;
  } else if (lvl.cls === "watch") {
    predHeadline = "Soil saturation elevating cut-slope risk";
    predMeta = `Escalate if 24h rainfall exceeds ${rainThr} mm`;
  } else {
    predHeadline = "No critical rainfall–soil trigger";
    predMeta = `Next weather refresh in a few minutes`;
  }

  return {
    key,
    name: base.name,
    center: base.center,
    zoom: base.zoom,
    score,
    rain: rain24,
    soil: soilPct,
    rainThreshold: rainThr,
    rainSeries: weather?.rainSeries ?? [0, 0, 0, 0, 0, 0, Math.round(rain24)],
    trend7: weather?.trend7 ?? Array(7).fill(Math.round(score * 0.8)),
    trend30: weather?.trend30 ?? Array(30).fill(Math.round(score * 0.75)),
    predHeadline,
    predMeta,
    zones,
    sensors,
    route: base.route,
    shelters: base.shelters.map((s) => ({ ...s, occupied: Math.round(s.capacity * 0.15) })),
    source: weather?.source ?? "Open-Meteo",
  };
}

function formatUpdated(ms) {
  const sec = Math.max(1, Math.round((Date.now() - ms) / 1000));
  if (sec < 60) return `Live · updated ${sec}s ago`;
  return `Live · updated ${Math.round(sec / 60)}m ago`;
}

function toast(message) {
  const el = $("#toast");
  el.hidden = false;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 3200);
}

function setFeedStatus(status, detail) {
  state.feedStatus = status;
  const line = $(".live-line");
  const chip = $(".data-chip");
  if (line) {
    const label =
      status === "live"
        ? `Live weather · ASDMA`
        : status === "error"
          ? `Feed error · retrying`
          : `Connecting · ASDMA`;
    line.innerHTML = `<span class="status-dot ${status === "error" ? "is-error" : ""}"></span> ${detail || label}`;
  }
  if (chip) {
    chip.textContent = status === "live" ? "Live" : status === "error" ? "Offline" : "…";
    chip.title =
      status === "live"
        ? "Rainfall and soil moisture from Open-Meteo. Geotech nodes await ASDMA link."
        : "Weather feed status";
    chip.classList.toggle("is-live", status === "live");
    chip.classList.toggle("is-error", status === "error");
  }
}

async function fetchDistrictWeather(key) {
  const base = DISTRICT_DATA[key];
  const [lat, lon] = base.center;
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&hourly=precipitation,soil_moisture_0_to_7cm` +
    `&daily=precipitation_sum` +
    `&past_days=7&forecast_days=1&timezone=Asia%2FKolkata`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather HTTP ${res.status}`);
  const data = await res.json();
  const precip = data.hourly?.precipitation || [];
  const soil = data.hourly?.soil_moisture_0_to_7cm || [];
  const times = data.hourly?.time || [];
  const now = Date.now();
  let rain24 = 0;
  const seriesBuckets = Array(7).fill(0);
  times.forEach((t, i) => {
    const ts = new Date(t).getTime();
    const ageH = (now - ts) / 3600000;
    const p = precip[i] || 0;
    if (ageH >= 0 && ageH <= 24) rain24 += p;
    if (ageH >= 0 && ageH <= 168) {
      const bucket = Math.min(6, Math.floor((168 - ageH) / 24));
      seriesBuckets[bucket] += p;
    }
  });
  let soilLatest = 0;
  for (let i = soil.length - 1; i >= 0; i -= 1) {
    if (soil[i] != null) {
      soilLatest = soil[i];
      break;
    }
  }
  const soilPct = soilToPercent(soilLatest);
  const daily = data.daily?.precipitation_sum || [];
  const trend7 = daily.slice(-7).map((v) => {
    const rain = v || 0;
    return computeScore(rain, soilPct, base.hazardBias, state.admin.rainThreshold || base.rainThreshold, state.admin.soilThreshold);
  });
  while (trend7.length < 7) trend7.unshift(trend7[0] || 30);
  const trend30 = Array.from({ length: 30 }, (_, i) => {
    const src = trend7[i % trend7.length] || 30;
    return Math.min(99, Math.max(5, Math.round(src * (0.85 + (i % 5) * 0.02))));
  });

  const weather = {
    rain24: +rain24.toFixed(1),
    soilPct,
    rainSeries: seriesBuckets.map((v) => Math.round(v)),
    trend7,
    trend30,
    source: "Open-Meteo",
    fetchedAt: Date.now(),
  };
  weatherCache[key] = weather;
  return weather;
}

async function refreshWeather(showToast) {
  setFeedStatus("connecting");
  try {
    const weather = await fetchDistrictWeather(state.district);
    state.live = buildLive(state.district, weather);
    state.updatedAt = Date.now();
    setFeedStatus("live");
    const lvl = levelFromScore(state.live.score);
    if (state.lastRiskClass !== "high" && lvl.cls === "high" && state.admin.autoSms) {
      logBroadcast(`Auto SMS queued for ${state.live.name} high-risk crossing`);
      toast(`Auto SMS queued for ${state.live.name}`);
    }
    state.lastRiskClass = lvl.cls;
    buildNotifications();
    renderAll();
    if (showToast) toast(`Live weather loaded for ${state.live.name}`);
  } catch (err) {
    console.error(err);
    setFeedStatus("error");
    if (!state.live) state.live = buildLive(state.district, weatherCache[state.district] || null);
    renderAll();
    toast("Weather feed unavailable — retrying");
  }
}

function ensureMap(which) {
  const elId = which === "home" ? "mapCanvasHome" : "mapCanvasFull";
  const el = document.getElementById(elId);
  if (!el || typeof L === "undefined") return null;
  if (maps[which]) {
    setTimeout(() => maps[which].invalidateSize(), 50);
    return maps[which];
  }
  el.innerHTML = "";
  const map = L.map(el, {
    zoomControl: true,
    attributionControl: true,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);
  maps[which] = map;
  maps.layers[which] = L.layerGroup().addTo(map);
  return map;
}

function markerIcon(color, label) {
  return L.divIcon({
    className: "bc-marker",
    html: `<span class="bc-pin" style="--c:${color}">${label || ""}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function renderMaps() {
  const d = state.live;
  if (!d) return;
  ["home", "full"].forEach((which) => {
    const map = ensureMap(which);
    if (!map) return;
    const group = maps.layers[which];
    group.clearLayers();
    map.setView(d.center, d.zoom);

    if (state.layer === "risk" || state.layer === "sensors") {
      d.zones.forEach((z) => {
        const color = z.tone === "red" ? "#d64545" : z.tone === "amber" ? "#c9962a" : "#2f9e6b";
        if (state.layer === "risk") {
          L.circle([z.lat, z.lng], {
            radius: 350,
            color,
            weight: 2,
            fillColor: color,
            fillOpacity: 0.18,
          })
            .bindPopup(`<strong>${z.id} ${z.title}</strong><br>Score ${z.score} · ${z.action}`)
            .addTo(group);
        }
        L.marker([z.lat, z.lng], { icon: markerIcon(color, z.id.split("-").pop()) })
          .bindPopup(`<strong>${z.id} ${z.title}</strong><br>Score ${z.score} · ${z.action}<br>${z.dist}`)
          .addTo(group);
      });
    }

    if (state.layer === "sensors") {
      d.sensors.forEach((s) => {
        const color = s.status === "online" ? "#2f9e6b" : s.status === "warn" ? "#c9962a" : "#6d7a8b";
        L.marker([s.lat, s.lng], { icon: markerIcon(color, "S") })
          .bindPopup(`<strong>${s.id} ${s.name}</strong><br>${s.note || s.status}`)
          .addTo(group);
      });
    }

    if (state.layer === "routes") {
      if (d.route?.line?.length) {
        L.polyline(d.route.line, { color: "#3d8fb5", weight: 4, dashArray: "6 6" })
          .bindPopup(d.route.path)
          .addTo(group);
      }
      d.shelters.forEach((s) => {
        L.marker([s.lat, s.lng], { icon: markerIcon("#3d8fb5", "H") })
          .bindPopup(`<strong>${s.name}</strong><br>${s.place}<br>Capacity ${s.capacity}`)
          .addTo(group);
      });
    }
  });

  const detail = $("#mapDetail");
  if (detail) {
    const top = [...d.zones].sort((a, b) => b.score - a.score)[0];
    detail.innerHTML = `<h3>${top.title}</h3>
      <p>Risk score ${top.score} · ${top.action}. Distance ${top.dist}. Layer: <strong>${state.layer}</strong>. Map tiles: OpenStreetMap. Weather: ${d.source}.</p>`;
  }
}

function renderTrend() {
  const d = state.live;
  if (!d) return;
  const values = state.trendRange === "7d" ? d.trend7 : d.trend30;
  const w = 320;
  const h = 110;
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const span = Math.max(1, max - min);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 16) - 8;
    return [x, y];
  });
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${pts.at(-1)[0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`;
  $("#trendLine").setAttribute("d", line);
  $("#trendArea").setAttribute("d", area);
  const color = riskColor(values.at(-1));
  $("#trendLine").setAttribute("stroke", color);
  $("#trendArea").setAttribute(
    "fill",
    color === "#d64545" ? "rgba(214,69,69,.12)" : color === "#c9962a" ? "rgba(201,150,42,.12)" : "rgba(47,158,107,.12)"
  );

  if (state.trendRange === "7d") {
    $("#trendLabels").innerHTML =
      "<span>D-6</span><span>D-5</span><span>D-4</span><span>D-3</span><span>D-2</span><span>D-1</span><span>Today</span>";
  } else {
    $("#trendLabels").innerHTML = "<span>Day 1</span><span>Day 10</span><span>Day 20</span><span>Today</span>";
  }

  $("#trendMeta").textContent = `Risk index from live rainfall and soil moisture · current ${d.score}`;
}

function renderHome() {
  const d = state.live;
  if (!d) return;
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
      ? `Live weather shows elevated failure drivers. Evacuate ${top.title}.`
      : lvl.cls === "watch"
        ? `Soil saturation is elevating cut-slope risk near ${top.title}. Restrict hill traffic.`
        : `No critical rainfall–soil trigger. Continue routine checks.`;

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
  $("#riskMeta").textContent = `${d.source} · ${formatUpdated(state.updatedAt)}`;

  $("#predHeadline").textContent = d.predHeadline;
  $("#predMeta").textContent = d.predMeta;
  const predFill = $("#predBarFill");
  predFill.style.width = `${d.score}%`;
  predFill.className = lvl.cls === "high" ? "" : lvl.cls;

  $("#rainValue").textContent = Math.round(d.rain);
  $("#rainChart").innerHTML = d.rainSeries
    .map((v) => `<span style="--h:${Math.max(12, (v / Math.max(...d.rainSeries, 1)) * 100)}%"></span>`)
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
  } else {
    soilMeta.textContent = `Within soil threshold (${soilThr}%)`;
    soilMeta.className = "meta ok-text";
  }

  $("#zoneCount").textContent = `${d.zones.filter((z) => z.tone !== "green").length} active`;
  $("#zoneList").innerHTML = d.zones
    .slice()
    .sort((a, b) => b.score - a.score)
    .map(
      (z) => `<li class="zone-item">
      <span class="z-dot ${z.tone}"></span>
      <div>
        <strong>${z.id} ${z.title}</strong>
        <p>Score ${z.score} · ${z.action} · ${z.dist}</p>
      </div>
    </li>`
    )
    .join("");

  renderTrend();
}

function renderSensors() {
  const d = state.live;
  if (!d) return;
  const online = d.sensors.filter((s) => s.status === "online").length;
  const warn = d.sensors.filter((s) => s.status === "warn").length;
  const offline = d.sensors.filter((s) => s.status === "offline").length;
  $("#sensorSummary").innerHTML = `
    <span class="stat-pill">${d.sensors.length} nodes</span>
    <span class="stat-pill" style="color:var(--safe)">${online} live weather</span>
    <span class="stat-pill" style="color:var(--watch)">${warn} degraded</span>
    <span class="stat-pill" style="color:var(--muted)">${offline} awaiting link</span>`;

  $("#sensorGrid").innerHTML = d.sensors
    .map((s) => {
      const reading =
        s.value == null ? "—" : s.type === "weather" ? `${s.value}${s.unit}` : `${s.value}${s.unit}`;
      return `<button type="button" class="sensor ${s.status}" data-sensor="${s.id}">
        <div class="sensor-top"><strong>${s.id}</strong><span class="sensor-status">${s.status}</span></div>
        <p class="sensor-name">${s.name}</p>
        <p class="sensor-value">${reading}</p>
        <p class="meta">${s.note || ""}</p>
      </button>`;
    })
    .join("");

  $$("#sensorGrid .sensor").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("#sensorGrid .sensor").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      const s = d.sensors.find((x) => x.id === btn.dataset.sensor);
      toast(`${s.id}: ${s.note || s.status}`);
    });
  });

  const total = d.sensors.length || 1;
  $("#healthBars").innerHTML = [
    ["Live", online, "var(--safe)"],
    ["Degraded", warn, "var(--watch)"],
    ["Awaiting", offline, "var(--faint)"],
  ]
    .map(
      ([label, n, color]) => `<div class="health-row">
      <span>${label}</span>
      <div class="health-track"><i style="width:${(n / total) * 100}%;background:${color}"></i></div>
      <strong>${n}</strong>
    </div>`
    )
    .join("");

  $("#telemetryList").innerHTML = d.sensors
    .map((s) => {
      const reading = s.value == null ? "No signal" : `${s.value}${s.unit}`;
      return `<li><strong>${s.id}</strong><span>${reading}</span><em>${s.note || s.status}</em></li>`;
    })
    .join("");
}

function renderRelief() {
  const d = state.live;
  if (!d) return;
  $("#routeCard").innerHTML = `<strong>${d.route.title}</strong><p>${d.route.path}</p><span>ETA ${d.route.eta}</span>`;
  $("#routeSteps").innerHTML = d.route.steps.map((s) => `<li>${s}</li>`).join("");
  $("#shelterCount").textContent = `${d.shelters.length} sites`;
  $("#shelterList").innerHTML = d.shelters
    .map(
      (s) => `<div class="shelter">
      <div>
        <strong>${s.name}</strong>
        <p>${s.place}</p>
        <span>${s.dist} · capacity ${s.capacity}</span>
      </div>
      <button type="button" data-shelter="${s.name}">Directions</button>
    </div>`
    )
    .join("");

  $$("#shelterList button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = d.shelters.find((x) => x.name === btn.dataset.shelter);
      if (s) {
        window.open(`https://www.openstreetmap.org/directions?to=${s.lat}%2C${s.lng}`, "_blank", "noopener");
      }
    });
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
    ? "Sign in to unlock broadcast controls. Carrier and field hardware links are configured by ASDMA ops."
    : state.sirenOn
      ? `Siren command logged for ${d.name}. Connect field hardware in production.`
      : "Commands are logged for dispatch · attach carrier / siren APIs in production";
}

function buildNotifications() {
  const agesMin = [12, 28, 41];
  let i = 0;
  const items = Object.keys(DISTRICT_DATA).flatMap((key) => {
    const weather = weatherCache[key];
    const live = buildLive(key, weather || null);
    const lvl = levelFromScore(live.score);
    if (lvl.cls === "safe") return [];
    const top = [...live.zones].sort((a, b) => b.score - a.score)[0];
    const age = agesMin[i % agesMin.length];
    i += 1;
    return [
      {
        id: `${key}-${top.id}`,
        district: key,
        title: `${lvl.level} · ${live.name}`,
        body: `${top.title} scored ${top.score}. ${top.action} recommended.`,
        unread: true,
        at: Date.now() - age * 60000,
      },
    ];
  });
  state.notifications = items;
}

function renderNotifications() {
  const unread = state.notifications.filter((n) => n.unread).length;
  const badge = $("#notifBadge");
  badge.textContent = unread || "";
  badge.dataset.count = String(unread);
  $("#notifList").innerHTML = state.notifications.length
    ? state.notifications
        .map((n) => {
          const mins = Math.max(1, Math.round((Date.now() - n.at) / 60000));
          return `<li class="${n.unread ? "unread" : ""}" data-id="${n.id}">
            <strong>${n.title}</strong>
            <p>${n.body}</p>
            <time>${mins}m ago</time>
          </li>`;
        })
        .join("")
    : `<li><strong>No active alerts</strong><p>All monitored districts are stable on the current weather feed.</p></li>`;

  $$("#notifList li[data-id]").forEach((li) => {
    li.addEventListener("click", () => {
      const n = state.notifications.find((x) => x.id === li.dataset.id);
      if (!n) return;
      n.unread = false;
      setDistrict(n.district);
      $("#district").value = n.district;
      navigate("map");
      renderNotifications();
    });
  });
}

function renderAdmin() {
  if (!state.authed || !state.live) return;
  const a = state.admin;
  $("#thrHigh").value = a.highScore;
  $("#thrWatch").value = a.watchScore;
  $("#thrRain").value = a.rainThreshold;
  $("#thrSoil").value = a.soilThreshold;
  $("#thresholdNote").textContent = `High ≥ ${a.highScore} · Watch ≥ ${a.watchScore} · Rain ${a.rainThreshold} mm · Soil ${a.soilThreshold}%`;

  $("#adminSensorList").innerHTML = state.live.sensors
    .map((s) => {
      const onMaint = Boolean(a.maintenance[s.id]);
      return `<div class="admin-sensor-row">
        <div>
          <strong>${s.id} · ${s.name}</strong>
          <p>${s.type === "weather" ? "Live weather node" : "Geotech node"} · ${s.note || s.status}</p>
        </div>
        <button type="button" class="btn ghost compact" data-maint="${s.id}">${onMaint ? "Clear maint." : "Maintenance"}</button>
      </div>`;
    })
    .join("");

  $$("#adminSensorList [data-maint]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.maint;
      if (a.maintenance[id]) delete a.maintenance[id];
      else a.maintenance[id] = true;
      saveAdmin();
      state.live = buildLive(state.district, weatherCache[state.district] || null);
      renderAll();
      toast(`Maintenance updated for ${id}`);
    });
  });

  $("#officerCount").textContent = `${a.officers.length} on roster`;
  $("#officerList").innerHTML = a.officers
    .map(
      (o) => `<li>
      <div><strong>${o.name}</strong><p>${o.role}</p></div>
      <button type="button" data-remove-officer="${o.id}">Remove</button>
    </li>`
    )
    .join("");
  $$("#officerList [data-remove-officer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      a.officers = a.officers.filter((o) => o.id !== btn.dataset.removeOfficer);
      if (!a.officers.find((o) => o.id === a.operatorId) && a.officers[0]) a.operatorId = a.officers[0].id;
      saveAdmin();
      renderAdmin();
    });
  });

  $("#operatorSelect").innerHTML = a.officers
    .map((o) => `<option value="${o.id}" ${o.id === a.operatorId ? "selected" : ""}>${o.name}</option>`)
    .join("");

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

  syncAuthUI();
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
    const label = state.session.role === "owner" ? "Owner" : `Controller · ${state.session.id}`;
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
  if (accountsCard) accountsCard.hidden = !(state.session && state.session.role === "owner");
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

async function setDistrict(key) {
  state.district = key;
  state.live = buildLive(key, weatherCache[key] || null);
  state.updatedAt = Date.now();
  state.lastRiskClass = levelFromScore(state.live.score).cls;
  renderAll();
  await refreshWeather(false);
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
    setTimeout(() => {
      maps.home?.invalidateSize();
      maps.full?.invalidateSize();
      renderMaps();
    }, 80);
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
  if (state.session?.role === "owner") return { id: "OWNER", name: "Owner", role: "System owner" };
  if (state.session?.role === "controller") return { id: state.session.id, name: state.session.id, role: "Controller" };
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

function setupEvents() {
  $("#district").addEventListener("change", (e) => setDistrict(e.target.value));
  $$(".tab").forEach((tab) => tab.addEventListener("click", () => navigate(tab.dataset.nav)));

  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.layer = chip.dataset.layer;
      syncLayerChips();
      renderMaps();
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
    renderMaps();
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
      body: `Queue a siren command for ${state.live.name}. Field hardware activates once the ASDMA siren API is connected.`,
      confirmLabel: "Queue Siren",
    });
    if (!ok) return;
    state.sirenOn = true;
    logBroadcast(`Sirens queued in ${state.live.name}`);
    toast("Siren command queued");
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
      body: `Queue an SMS advisory for about ${recipients.toLocaleString("en-IN")} shelter-capacity contacts in ${state.live.name}. Carrier send starts when SMS gateway credentials are added.`,
      confirmLabel: "Queue SMS",
    });
    if (!ok) return;
    logBroadcast(`SMS queued · ${recipients.toLocaleString("en-IN")} capacity contacts`);
    toast("SMS queued for dispatch");
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
    state.live = buildLive(state.district, weatherCache[state.district] || null);
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
    state.live = buildLive(state.district, weatherCache[state.district] || null);
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

async function init() {
  setFeedStatus("connecting");
  state.live = buildLive(state.district, null);
  setupEvents();
  renderAll();
  const initial = location.hash.replace("#", "");
  if (initial === "admin" && !state.authed) {
    navigate("home");
    openAuthModal();
  } else {
    navigate(["home", "map", "sensors", "relief", "admin"].includes(initial) ? initial : "home");
  }
  await refreshWeather(false);
  // Prefetch other districts for alerts
  Object.keys(DISTRICT_DATA)
    .filter((k) => k !== state.district)
    .forEach((k) => {
      fetchDistrictWeather(k)
        .then(() => {
          buildNotifications();
          renderNotifications();
        })
        .catch(() => {});
    });
  setInterval(() => refreshWeather(false), 5 * 60 * 1000);
  setInterval(() => {
    if (state.view === "home" && state.live) {
      $("#riskMeta").textContent = `${state.live.source} · ${formatUpdated(state.updatedAt)}`;
    }
  }, 1000);
}

init();
