# Prism IPTV v2.2 (Live) 🎬🛡️

> Next-generation IPTV platform with high-performance playback, spatial UI, and zero-tolerance safety protocols.

[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/yourusername/prism-iptv)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-20+-brightgreen.svg)](https://nodejs.org)

![Prism IPTV Banner](assets/banner.png)

---

## 🛡️ V2.2 Features

-   **Zero-Latency Logic**: Optimized React frontend with `react-virtuoso` for smooth EPG scrolling.
-   **Operational Safety**: Destructive action confirmation and identity-aware security.
-   **Live TV Filters**: Quick-access category chips (News, Sports, Anime) and compound filtering.
-   **Unified Audio Search**: Integrated Radio Browser and iTunes API for seamless music/podcast discovery.
-   **Smart Spoiler Guard**: Content shielding for sensitive program metadata.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose (optional)

### Installation (One Command)

```bash
./deploy.sh
```

Or see [QUICK_START.md](QUICK_START.md) for detailed instructions.

### Access

- **Frontend:** http://localhost:8080
- **API:** http://localhost:3001

---

## 🎯 Core Features

### 📺 Smart TV Interface

- **Virtualized TV Guide**: Lag-free scrolling for thousands of channels.
- **Category Chips**: Instant filtering for Live TV content.
- **4K Support**: Automatic highest-resolution stream selection.

### 🌌 Synapse Spatial UI

- **Cinema Void**: A 3D environment with reflective surfaces and dynamic lighting.
- **Audio-Reactive Visuals**: Real-time FFT analysis driving 3D elements for a deep sensory connection.
- **Diegetic Controls**: Aerogel-material 3D controls integrated directly into the scene.

### 📱 Mobile Companion App

- **Remote Control**: Control playback, volume, and channel selection from your phone.
- **Haptic Feedback**: Physical response for button presses.
- **Instant Sync**: WebSocket-based real-time connection.

### 🔧 MCP Server Suite

**Integrated Control**:

| Server | Purpose |
|--------|---------|
| Prism Control | UI navigation, playback, theme |
| Media Knowledge | EPG data, radio stations, movie search |
| User Memory | History, preferences, session context |

---

## 🏗️ Architecture

```
┌───────────────────────────────────────┐
│        Prism IPTV (React 19)          │
│   Three.js • HLS.js • Zustand Stores  │
└──────────────────┬────────────────────┘
                   │ HTTP / WebSocket
        ┌──────────▼──────────┐
        │    Node.js Backend  │
        │   Express • SQLite  │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │  External Services  │
        │  EPG • Radio API    │
        └─────────────────────┘
                   ▲
                   │ WebSocket
        ┌──────────┴──────────┐
        │ Mobile Remote WebApp│
        └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + TypeScript
- **Vite 7** - Build tool
- **Three.js** - 3D Environment
- **HLS.js** - Adaptive streaming
- **react-virtuoso** - Virtualized lists

### Backend (Node.js)
- **Express.js** - API Server
- **WebSockets** - Real-time stats
- **fast-xml-parser** - EPG parsing

### Infrastructure
- **Docker** + **Docker Compose**
- **Nginx** - Web Server

---

## 📁 Project Structure

```
Prism IPTV/
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── services/           # API services
│   └── stores/             # Zustand stores
│
├── server/                 # Node.js backend
│   ├── src/                # Backend source
│   └── Dockerfile          # Backend container
│
├── mcp-servers/            # MCP server suite
│
├── docker/                 # Docker configuration
│   └── docker-compose.yml
│
└── docs/                   # Documentation
```

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [QUICK_START.md](QUICK_START.md) | Get running in 10 minutes |
| [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md) | Feature specifications |
| [API_REFERENCE.md](docs/API_REFERENCE.md) | Backend API endpoints |

---

## 🐳 Docker Deployment

```bash
# Build and start services
docker-compose up -d --build

# Check status
docker-compose ps
```

**Services:**
- `backend` - Express.js API (port 3001)
- `frontend` - React + Nginx (port 8080)

---

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

```bash
# Clone repository
git clone https://github.com/Snapwave333/Prism-IPTV-
cd Prism-IPTV-

# Install and Run
npm install
npm run dev
```

---

## 📜 License

MIT License - see [LICENSE](LICENSE) file

---

## 🎉 Highlights

✨ **Live TV Filters** - Quick-access category chips
🎵 **Unified Audio** - Integrated Radio & Podcast search
⚡ **Virtualized EPG** - Performant channel grid
🌌 **Spatial UI** - Immersive 3D environments
🐳 **Dockerized** - Simple container deployment

---

**Made with ❤️ using React and Node.js**

**Version:** 2.2.0 | **Last Updated:** January 12, 2026

🚀 **[Get Started →](QUICK_START.md)**
