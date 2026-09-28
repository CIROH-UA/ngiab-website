# React + Vite Project

This project is built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `cd ngiab-website`

Navigate to the project directory.

### `npm install`

Installs all the dependencies required for the project.\
Run this command first after cloning the repository to set up the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run serve`

Previews the production build locally.

## Quick Commands Reference

```bash
cd ngiab-website
npm install
npm start
npm run build
npm run serve
```

## API Keys & Configuration

### 1. PyPI Stats (NGIAB-data-preprocess)

**Purpose**: Track download statistics for the NGIAB-data-preprocess Python package over the last 3 months.

**How to Get the API Key**:
- Visit [PePy.tech](https://pepy.tech)
- Create an account or sign in at [PePy.tech](https://pepy.tech)
- Open your user menu (top‑right) and go to **Account** → **API tokens**
- Click **Create new token**, give it a name, and copy the generated token value
- Add this value to your `.env` file (for local development) or GitHub repository secrets (for deployment)

**Configuration**:
```env
VITE_PEPY_TECH_TOKEN=<Your PePy.tech API Token>
VITE_PEPY_TECH_BASE_URL=https://api.pepy.tech
```

**GitHub Repository Secrets** (for CI/CD deployments):
1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VITE_PEPY_TECH_TOKEN` - Your PePy.tech API token
   - `VITE_PEPY_TECH_BASE_URL` - `https://api.pepy.tech`

**What it tracks**:
- Version-specific downloads (4.6.7, 4.6.6, 4.6.5, 4.6.4, 4.6.3)
- Total downloads in the last 90 days
- Daily granularity download statistics

## Learn More

To learn more about the technologies used in this project:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [Styled Components Documentation](https://styled-components.com/docs)

## Project Structure

This project uses:
- React 19
- Vite 6
- React Router 7
- Styled Components
- Tailwind CSS
- Axios for HTTP requests

## Citing this software
Arpita Patel, James Halgren, Zach Wills, et al. NextGen In A Box (NGIAB): Open-Source Containerization of the NextGen Framework to Enable Community-Driven Hydrology Modeling. Environmental Modelling & Software, page 106666, August 2025. ISSN 1364-8152. doi: 10.1016/j.envsoft.2025.106666. URL https://www.sciencedirect.com/science/article/pii/S1364815225003500.

| | |
| --- | --- |
| ![CIROH Logo](https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/docs/img/ciroh-bgsafe.png) | Funding for this project was provided by the National Oceanic & Atmospheric Administration (NOAA), awarded to the Cooperative Institute for Research to Operations in Hydrology (CIROH) through the NOAA Cooperative Agreement with The University of Alabama (NA22NWS4320003). |
