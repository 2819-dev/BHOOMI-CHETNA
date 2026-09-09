# BHOOMI CHETNA

AI-powered landslide early warning console for Assam State Disaster Management Authority (ASDMA).

## What is live

- **Maps** — OpenStreetMap (Leaflet) for Guwahati Hills, Dima Hasao, Cachar, Karbi Anglong
- **Weather** — Open-Meteo rainfall + soil moisture (refreshes automatically)
- **AI slope prediction** — on-device ensemble classifier over live features (rain, soil, trend, terrain, zone pressure). Always runs; no fake random demo output
- **Optional LLM narrative** — Netlify function `/api/predict` enriches the outlook when `GROQ_API_KEY` or `OPENAI_API_KEY` is set in Netlify env
- **Auth** — owner master PIN + controller ID/PIN accounts (no public demo login)

## Geotech / broadcast

Incline and pore-pressure nodes stay marked **awaiting ASDMA feed** until a sensor API is connected. Siren/SMS commands are queued for dispatch until carrier/hardware endpoints are wired.

## Netlify

Publish the repo root. Functions directory: `netlify/functions`.

Optional env for LLM text:

- `GROQ_API_KEY` (preferred free-tier path) or `OPENAI_API_KEY`
