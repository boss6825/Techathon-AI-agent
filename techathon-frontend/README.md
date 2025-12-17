# Agentic Pharma Intelligence - Frontend

Enterprise-grade web application for pharmaceutical strategy and drug repurposing powered by Agentic AI.

## 🎯 Overview

This frontend application provides an intuitive interface for pharmaceutical strategists to:

- Query market intelligence across multiple data sources
- Analyze patent landscapes and IP opportunities
- Review clinical trial pipelines
- Assess trade dynamics and supply chain risks
- Generate comprehensive intelligence reports

## 🏗️ Architecture

### Pages

- **Console (`/`)**: Main chat interface with agent orchestration
- **Report (`/report/[id]`)**: Detailed intelligence report view
- **Architecture (`/about`)**: System capabilities and agent descriptions

### Components

- `Navbar`: Top navigation with branding and links
- `ChatInput`: Enterprise-style query input with example prompts
- `InsightCard`: Modular display for agent insights (market, patent, trials, etc.)
- `AgentTimeline`: Real-time agent activity monitoring

### Data Layer

- `mockData.js`: Curated pharmaceutical intelligence datasets for demo

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

- **Background**: Stone 50 (#fafaf9) - Warm off-white
- **Primary**: Purple 900 (#6b4668) - Deep plum
- **Accent**: Copper (#b87d52) - Muted gold
- **Text**: Stone 900, 700, 600 - Hierarchical grays

### Typography

- Font: Inter (system font)
- Scale: Tailwind default with custom overrides

### Principles

- Professional, muted palette (no flashy colors)
- Strong hierarchy and spacing
- Minimal, purposeful animations
- Enterprise-grade polish

## 📁 Project Structure

```
techathon-frontend/
├── src/
│   ├── app/
│   │   ├── page.js           # Main console
│   │   ├── layout.js         # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── about/
│   │   │   └── page.js       # Architecture page
│   │   └── report/
│   │       └── [id]/
│   │           └── page.js   # Report view
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ChatInput.js
│   │   ├── InsightCard.js
│   │   └── AgentTimeline.js
│   └── lib/
│       └── mockData.js       # Mock datasets
└── package.json
```

## 🧪 Demo Flow

1. **Landing**: User sees hero section with large prompt input
2. **Query Submission**: User enters pharmaceutical intelligence query
3. **Agent Execution**: Right sidebar shows real-time agent activity
4. **Results Display**: Six insight cards render with market, patent, trials data
5. **Report Generation**: User clicks "Generate Report" → navigates to full report
6. **PDF Export**: User can download comprehensive PDF (simulated)

## 🎭 Key Features

### Realistic Agent Simulation

- 10-second orchestrated execution timeline
- Sequential agent status updates (idle → running → completed)
- Authentic pharmaceutical datasets

### Enterprise UX

- Clean, professional interface
- Strong visual hierarchy
- Loading states and transitions
- Responsive layout

### Modular Architecture

- Reusable components
- Clean separation of concerns
- Easy to extend with real backend

## 🔮 Future Enhancements

### Phase 2 (Backend Integration)

- [ ] Connect to FastAPI backend
- [ ] Real-time WebSocket for agent updates
- [ ] Actual PDF generation endpoint
- [ ] Authentication system

### Phase 3 (Advanced Features)

- [ ] Query history and bookmarking
- [ ] Collaborative annotations
- [ ] Custom report templates
- [ ] Advanced filtering and search

## 📝 Notes for Judges

This frontend is designed to be **demo-ready** for hackathon evaluation:

1. **Enterprise Polish**: Looks like an internal pharma tool (IQVIA/McKinsey quality)
2. **Complete Flow**: End-to-end journey from query to report
3. **Realistic Data**: Curated pharmaceutical datasets that feel authentic
4. **Agentic Narrative**: Clear visualization of multi-agent orchestration
5. **Production-Ready Design**: Clean code, modular structure, professional UI

The frontend can be demoed standalone or connected to a backend API with minimal changes.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (React 19)
- **Deployment**: Vercel-ready

## 📄 License

Proprietary - Techathon 6.0 Submission

---

Built with ❤️ for pharmaceutical innovation
