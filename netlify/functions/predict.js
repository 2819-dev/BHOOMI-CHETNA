const { runSlopeAI } = require("./ai-model.js");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

function json(statusCode, body) {
  return { statusCode, headers: CORS, body: JSON.stringify(body) };
}

async function enrichWithLLM(base, payload) {
  const groqKey = process.env.GROQ_API_KEY;
  const openAiKey = process.env.OPENAI_API_KEY;
  if (!groqKey && !openAiKey) return null;

  const endpoint = groqKey
    ? "https://api.groq.com/openai/v1/chat/completions"
    : "https://api.openai.com/v1/chat/completions";
  const apiKey = groqKey || openAiKey;
  const model = groqKey ? "llama-3.3-70b-versatile" : "gpt-4o-mini";

  const prompt = `You are the ASDMA BHOOMI CHETNA slope-risk analyst for Assam.
Given this LIVE weather-driven model output, write a concise field outlook.
Return JSON only with keys: headline (max 110 chars), failureWindow (one sentence), action (one sentence).
Do not invent sensor readings. Use only the provided numbers.

District: ${payload.districtName}
Rain 24h: ${payload.rain24} mm (threshold ${payload.rainThreshold})
Soil moisture: ${payload.soilPct}% (threshold ${payload.soilThreshold})
Model class: ${base.level} · score ${base.score} · confidence ${base.confidence}%
Top drivers: ${base.drivers.map((d) => d.label).join(", ")}
Zones: ${(payload.zones || []).map((z) => `${z.id} ${z.title}`).join("; ")}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "Return valid JSON only." },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LLM HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || "{}";
  const parsed = JSON.parse(raw);
  return {
    ...base,
    headline: String(parsed.headline || base.headline).slice(0, 140),
    failureWindow: String(parsed.failureWindow || base.failureWindow),
    action: String(parsed.action || base.action),
    summary: `${parsed.headline || base.headline}. ${parsed.failureWindow || base.failureWindow}`,
    llm: true,
    llmModel: model,
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: CORS, body: "" };
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "POST only" });

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON" });
  }

  const base = runSlopeAI(payload);
  try {
    const enriched = await enrichWithLLM(base, payload);
    if (enriched) return json(200, enriched);
  } catch (err) {
    base.llmError = String(err.message || err);
  }
  return json(200, { ...base, llm: false });
};
