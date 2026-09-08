# BHOOMI CHETNA

Landslide early warning console for Assam State Disaster Management Authority (ASDMA).

## Live data

- **Maps** — real OpenStreetMap tiles (Leaflet) for Guwahati Hills, Dima Hasao, Cachar, and Karbi Anglong
- **Rainfall & soil moisture** — live Open-Meteo for each district; risk score is computed from those readings against admin thresholds
- **Geotech sensors** (incline, pore pressure, etc.) — marked awaiting ASDMA field feed until you connect your sensor API
- **Siren / SMS** — commands are queued in-app; wire ASDMA carrier / siren endpoints for field actuation

## Access

- **Owner** — private master PIN (hash-verified; plaintext never shipped)
- **Controllers** — ID + PIN accounts created by the owner in Admin

## Includes

- Live district hazard map with risk, sensor, and route layers
- Threshold-based landslide risk scoring from live weather
- Sensor panel (live weather nodes + pending geotech)
- Evacuation routes and shelters with OSM directions
- Authenticated admin for thresholds, roster, accounts, and broadcast archive

Netlify publishes the repository root.
