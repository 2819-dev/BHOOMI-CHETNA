# BHOOMI CHETNA

Landslide early warning console for Assam State Disaster Management Authority (ASDMA).

Sensor readings, risk scores, and maps in this build use **simulated client-side data**. Siren and SMS actions log locally and are not connected to field hardware or carriers.

## Access

There are **no public demo credentials**.

- **Owner** — paste the private master PIN (long, copy-paste only). Verified by SHA-256 hash in the app; plaintext is never shipped.
- **Controllers** — sign in with an ID and PIN created by the owner in Admin → Controller Accounts.

Public views (Home, Map, Sensors, Relief) stay open; Admin and broadcast controls stay locked until sign-in.

## Focus districts

Guwahati Hills · Dima Hasao · Cachar · Karbi Anglong

## Includes

- Schematic geo-hazard mapping with risk, sensor, and route layers
- Landslide risk scoring and model prediction
- Simulated IoT sensor telemetry
- Rainfall and soil moisture monitoring
- High-risk zone identification and emergency alerts
- Evacuation routes and nearby relief shelters
- Authenticated siren and SMS controls (local log only)
- Historical risk trends
- Administrator panel for thresholds, sensor maintenance, duty roster, controller accounts, and broadcast archive

Netlify publishes the repository root.
