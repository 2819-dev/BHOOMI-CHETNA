const districts = {
  guwahati: {
    name: "Guwahati Hills",
    alertTitle: "HIGH RISK ALERT — Guwahati Hills",
    alertCopy: "AI forecasts slope failure within 6–12 hrs. Evacuate Zone R-2.",
    score: 78,
    level: "HIGH RISK",
    levelClass: "high",
    confidence: "Confidence 91% · Updated 42s ago",
    aiHeadline: "Slope instability rising",
    aiMeta: "Failure window: 6–12 hours",
    rain: 86,
    soil: 74,
    pill: { label: "Zone R-2", text: "HIGH", cls: "" },
    zones: [
      { tone: "red", title: "R-2 Chandmari Slope", detail: "Score 86 · Evacuate", dist: "0.8 km" },
      { tone: "amber", title: "R-5 Kharghuli Ridge", detail: "Score 64 · Watch", dist: "2.1 km" },
      { tone: "amber", title: "R-7 Fatasil Cut", detail: "Score 58 · Monitor", dist: "3.4 km" },
    ],
    sensors: [
      { id: "GH-S01", name: "Incline", status: "online", detail: "Online · 2.4°" },
      { id: "GH-S02", name: "Pore Pressure", status: "online", detail: "Online · 48 kPa" },
      { id: "GH-S03", name: "Vibration", status: "warn", detail: "Degraded · High" },
      { id: "GH-S04", name: "Extensometer", status: "offline", detail: "Offline · 14m" },
    ],
    trend7: [42, 48, 51, 55, 63, 71, 78],
    trend30: [30, 34, 38, 41, 45, 48, 52, 49, 55, 58, 60, 57, 62, 66, 70, 68, 72, 69, 74, 71, 73, 76, 74, 77, 75, 78, 80, 79, 77, 78],
  },
  dima: {
    name: "Dima Hasao",
    alertTitle: "WATCH ADVISORY — Dima Hasao",
    alertCopy: "Saturated soils along Haflong corridor. Restrict hill traffic.",
    score: 61,
    level: "WATCH",
    levelClass: "watch",
    confidence: "Confidence 87% · Updated 1m ago",
    aiHeadline: "Moisture-driven risk elevated",
    aiMeta: "Escalate if rainfall exceeds 40 mm",
    rain: 58,
    soil: 66,
    pill: { label: "Zone DH-3", text: "WATCH", cls: "watch" },
    zones: [
      { tone: "amber", title: "DH-3 Haflong Cut", detail: "Score 67 · Watch", dist: "1.2 km" },
      { tone: "amber", title: "DH-1 Mahur Ridge", detail: "Score 59 · Monitor", dist: "4.0 km" },
      { tone: "green", title: "DH-6 Stable Bench", detail: "Score 28 · Stable", dist: "6.5 km" },
    ],
    sensors: [
      { id: "DH-S01", name: "Incline", status: "online", detail: "Online · 1.6°" },
      { id: "DH-S02", name: "Rain Gauge", status: "online", detail: "Online · 58 mm" },
      { id: "DH-S03", name: "Soil Probe", status: "online", detail: "Online · 66%" },
      { id: "DH-S04", name: "Vibration", status: "warn", detail: "Degraded · Mid" },
    ],
    trend7: [38, 41, 44, 49, 53, 57, 61],
    trend30: [25, 28, 30, 33, 36, 35, 39, 42, 40, 44, 47, 45, 48, 50, 52, 51, 54, 53, 55, 57, 56, 58, 59, 58, 60, 59, 61, 60, 62, 61],
  },
  cachar: {
    name: "Cachar",
    alertTitle: "STABLE — Cachar foothills",
    alertCopy: "No critical slope movement. Continue routine sensor checks.",
    score: 34,
    level: "STABLE",
    levelClass: "safe",
    confidence: "Confidence 94% · Updated 55s ago",
    aiHeadline: "Conditions within safe band",
    aiMeta: "Next model refresh in 15 min",
    rain: 28,
    soil: 41,
    pill: { label: "Zone CA-2", text: "STABLE", cls: "safe" },
    zones: [
      { tone: "green", title: "CA-2 Silchar Bench", detail: "Score 31 · Stable", dist: "1.5 km" },
      { tone: "green", title: "CA-4 Barak Escarpment", detail: "Score 38 · Stable", dist: "3.8 km" },
      { tone: "amber", title: "CA-7 Soft Cut", detail: "Score 52 · Monitor", dist: "5.2 km" },
    ],
    sensors: [
      { id: "CA-S01", name: "Incline", status: "online", detail: "Online · 0.8°" },
      { id: "CA-S02", name: "Pore Pressure", status: "online", detail: "Online · 22 kPa" },
      { id: "CA-S03", name: "Rain Gauge", status: "online", detail: "Online · 28 mm" },
      { id: "CA-S04", name: "Soil Probe", status: "online", detail: "Online · 41%" },
    ],
    trend7: [40, 38, 36, 35, 33, 34, 34],
    trend30: [45, 44, 42, 41, 40, 39, 38, 40, 37, 36, 35, 34, 36, 35, 33, 34, 32, 33, 35, 34, 33, 32, 34, 35, 33, 34, 33, 34, 35, 34],
  },
  karbi: {
    name: "Karbi Anglong",
    alertTitle: "HIGH RISK ALERT — Karbi Anglong",
    alertCopy: "Rapid pore-pressure rise near Diphu approaches. Prepare shelters.",
    score: 82,
    level: "HIGH RISK",
    levelClass: "high",
    confidence: "Confidence 89% · Updated 28s ago",
    aiHeadline: "Cascading failure probability high",
    aiMeta: "Failure window: 4–10 hours",
    rain: 94,
    soil: 81,
    pill: { label: "Zone KA-1", text: "HIGH", cls: "" },
    zones: [
      { tone: "red", title: "KA-1 Diphu Scarp", detail: "Score 88 · Evacuate", dist: "0.6 km" },
      { tone: "red", title: "KA-4 Hamren Spur", detail: "Score 79 · Evacuate", dist: "2.9 km" },
      { tone: "amber", title: "KA-9 Watch Bench", detail: "Score 61 · Watch", dist: "4.7 km" },
    ],
    sensors: [
      { id: "KA-S01", name: "Incline", status: "warn", detail: "Degraded · 3.8°" },
      { id: "KA-S02", name: "Pore Pressure", status: "online", detail: "Online · 61 kPa" },
      { id: "KA-S03", name: "Vibration", status: "online", detail: "Online · High" },
      { id: "KA-S04", name: "Extensometer", status: "offline", detail: "Offline · 6m" },
    ],
    trend7: [48, 55, 60, 68, 74, 79, 82],
    trend30: [32, 35, 38, 40, 44, 47, 50, 48, 52, 55, 58, 60, 59, 63, 66, 68, 70, 69, 72, 74, 73, 76, 78, 77, 79, 80, 81, 80, 82, 82],
  },
};

const $ = (sel) => document.querySelector(sel);

function setClock() {
  const now = new Date();
  $("#clock").textContent = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function riskColor(score) {
  if (score >= 70) return "#ef4444";
  if (score >= 50) return "#f5c542";
  return "#3ecf8e";
}

function renderTrend(values) {
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
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`;
  const lineEl = $("#trendLine");
  const areaEl = $("#trendArea");
  lineEl.setAttribute("d", line);
  areaEl.setAttribute("d", area);
  const color = riskColor(values[values.length - 1]);
  lineEl.setAttribute("stroke", color);
  areaEl.setAttribute("fill", `url(#trendFill)`);
  const stop0 = document.querySelector("#trendFill stop");
  if (stop0) stop0.setAttribute("stop-color", color);
  lineEl.style.animation = "none";
  void lineEl.offsetWidth;
  lineEl.style.animation = "";
}

function renderDistrict(key) {
  const d = districts[key];
  $("#mapDistrictLabel").textContent = d.name;
  $("#alertTitle").textContent = d.alertTitle;
  $("#alertCopy").textContent = d.alertCopy;
  $("#scoreValue").textContent = d.score;
  $("#scoreRing").style.setProperty("--p", d.score);
  $("#scoreRing").style.background = `radial-gradient(closest-side, var(--surface) 74%, transparent 75% 100%), conic-gradient(${riskColor(d.score)} calc(${d.score} * 1%), rgba(255,255,255,0.08) 0)`;
  const level = $("#riskLevel");
  level.textContent = d.level;
  level.className = `level ${d.levelClass}`;
  $("#riskMeta").textContent = d.confidence;
  $("#aiHeadline").textContent = d.aiHeadline;
  $("#aiMeta").textContent = d.aiMeta;
  $(".ai-bar span").style.width = `${d.score}%`;
  $("#rainValue").textContent = d.rain;
  $("#soilValue").textContent = d.soil;
  $("#soilFill").style.width = `${d.soil}%`;

  const pill = $("#riskPill");
  pill.className = `map-float risk-pill ${d.pill.cls}`.trim();
  pill.innerHTML = `<span class="label">${d.pill.label}</span><strong>${d.pill.text}</strong>`;

  const alert = $("#alertStrip");
  const alertCta = $(".alert-cta");
  if (d.levelClass === "safe") {
    alert.style.background = "linear-gradient(105deg, rgba(62,207,142,0.18), rgba(62,207,142,0.06))";
    alert.style.borderColor = "rgba(62,207,142,0.35)";
    $(".alert-icon").style.background = "#3ecf8e";
    alertCta.style.background = "#2f9f86";
    alertCta.textContent = "View";
  } else if (d.levelClass === "watch") {
    alert.style.background = "linear-gradient(105deg, rgba(245,197,66,0.2), rgba(245,197,66,0.06))";
    alert.style.borderColor = "rgba(245,197,66,0.4)";
    $(".alert-icon").style.background = "#f5c542";
    alertCta.style.background = "#c9971f";
    alertCta.textContent = "Review";
  } else {
    alert.style.background = "";
    alert.style.borderColor = "";
    $(".alert-icon").style.background = "";
    alertCta.style.background = "";
    alertCta.textContent = "Act";
  }

  $("#zoneCount").textContent = `${d.zones.filter((z) => z.tone !== "green").length} active`;
  $("#zoneList").innerHTML = d.zones
    .map(
      (z) => `<li>
      <span class="z-dot ${z.tone}"></span>
      <div><strong>${z.title}</strong><p>${z.detail}</p></div>
      <em>${z.dist}</em>
    </li>`
    )
    .join("");

  $("#sensorGrid").innerHTML = d.sensors
    .map(
      (s) => `<div class="sensor ${s.status}">
      <div class="sensor-top"><span>${s.id}</span><i></i></div>
      <strong>${s.name}</strong>
      <p>${s.detail}</p>
    </div>`
    )
    .join("");

  const range = document.querySelector(".seg.active")?.dataset.range || "7d";
  renderTrend(range === "30d" ? d.trend30 : d.trend7);
  $("#trendMeta").textContent =
    d.score >= 70
      ? "Risk climbed after prolonged monsoon rainfall."
      : d.score >= 50
        ? "Watch band sustained by soil saturation."
        : "Trend remains within the stable operating band.";
}

function toast(message) {
  const el = $("#toast");
  el.hidden = false;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    el.classList.remove("show");
  }, 3200);
}

function setupLayers() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const layer = chip.dataset.layer;
      const risk = document.querySelector(".layer-risk");
      const sensors = document.querySelector(".layer-sensors");
      const routes = document.querySelectorAll(".layer-routes");
      if (layer === "risk") {
        risk.style.opacity = "1";
        sensors.style.opacity = "1";
        routes.forEach((r) => (r.style.opacity = "0"));
      } else if (layer === "sensors") {
        risk.style.opacity = "0.35";
        sensors.style.opacity = "1";
        routes.forEach((r) => (r.style.opacity = "0"));
      } else {
        risk.style.opacity = "0.4";
        sensors.style.opacity = "0.35";
        routes.forEach((r) => (r.style.opacity = "1"));
      }
    });
  });
}

function setupControls() {
  const siren = $("#sirenBtn");
  let sirenOn = false;
  siren.addEventListener("click", () => {
    sirenOn = !sirenOn;
    siren.classList.toggle("active-siren", sirenOn);
    siren.querySelector("span").textContent = sirenOn ? "Siren Active" : "Activate Siren";
    toast(sirenOn ? "Community sirens activated across focus district." : "Sirens deactivated.");
    $("#controlNote").textContent = sirenOn
      ? "Broadcasting audible warning · log #ASDMA-SRN"
      : "Authorized for ASDMA & district controllers";
  });

  $("#smsBtn").addEventListener("click", () => {
    toast("SMS alert queued to registered residents & response teams.");
  });

  $("#viewAlert").addEventListener("click", () => {
    document.querySelector(".map-panel").scrollIntoView({ behavior: "smooth", block: "center" });
    toast("Focusing map on highest-risk zone.");
  });

  document.querySelectorAll(".seg").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".seg").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const key = $("#district").value;
      const d = districts[key];
      renderTrend(btn.dataset.range === "30d" ? d.trend30 : d.trend7);
    });
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

function init() {
  setClock();
  setInterval(setClock, 30000);
  renderDistrict("guwahati");
  $("#district").addEventListener("change", (e) => renderDistrict(e.target.value));
  setupLayers();
  setupControls();
}

init();
