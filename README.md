# 🌐 Carris Metropolitana Website

Welcome to the official GitHub repository for [Carris Metropolitana](https://carrismetropolitana.pt)'s public website — the digital hub for public transportation in the Lisbon Metropolitan Area.

---

## 🚀 Overview

This website is designed to provide riders with clear, timely, and accessible information about:

- 🚌 Routes and schedules
- 📍 Real-time vehicle positions
- 💳 Fare information and passes
- 📢 Service alerts and updates
- 🔍 Open data & developer resources

Built with performance, accessibility, and user experience in mind.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (React)
- **CMS**: [PayloadCMS](https://payloadcms.com/) (headless)
- **Maps**: MapLibre GL JS, custom GeoJSON
- **API**: REST & GTFS Realtime
- **Deployment**: Self-hosted

---

## 📦 Repository Structure

```
carrismetropolitana-website
│
├── apps/                     # Application code
│   ├── frontend/             # Next.js public website
│   ├── backoffice/           # PayloadCMS admin portal
│   └── nginx/                # Web server configuration
│
├── environments/             # Environment-specific configurations
│   ├── development/          # Local development setup
│   ├── staging/              # Staging environment config
│   └── production/           # Production deployment config
│
└── shared/                   # Common code and configurations
    └── settings/             # Shared application settings
```