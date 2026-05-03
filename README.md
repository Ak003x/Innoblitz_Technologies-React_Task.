<div align="center">

# Pyxis  Dashboard

### A modern dashboard to validate software design with source code and identify gaps in unit test checklists.

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Recharts](https://img.shields.io/badge/Recharts-3.x-22B5BF?style=for-the-badge)

</div>

---

## Overview

**Pyxis AI Dashboard** is a full-featured analytics dashboard built with Next.js and React. It provides a clean summary view with interactive pie charts and a detailed data management table — allowing users to track, search, and manage functional requirement records with full CRUD support.

---

## Features

- **Dashboard Summary** — Two interactive pie charts side by side:
  - Validate Design with Source Code
  - Identify Gaps in Unit Test Checklist
- **Detail View (Development)** — Full data table with:
  - Live search across records
  - Add / Edit / Delete records via a modal
  - Paginated results with page controls
  - Export button
- **Tab Navigation** — Quickly switch between views
- **Redux State Management** — Centralized state with Redux Toolkit for both table and chart data

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.4 | React framework & routing |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | ^2.11.2 | Global state management |
| [Recharts](https://recharts.org/) | ^3.8.1 | Pie chart visualizations |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react_task.git

# Navigate into the project
cd react_task

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/
│   ├── page.js                   # Dashboard page (pie charts)
│   ├── development/
│   │   └── page.jsx              # Detail view (data table)
│   ├── api/
│   │   └── records/route.js      # API route for records
│   ├── layout.js
│   └── globals.css
│
├── components/
│   ├── Sidebar.jsx               # Left navigation sidebar
│   ├── Header.jsx                # Top header bar
│   ├── TabNav.jsx                # Tab navigation
│   ├── PieChartCard.jsx          # Recharts pie chart card
│   ├── DataTable.jsx             # Table with CRUD + pagination
│   └── RecordModal.jsx           # Add / Edit record modal
│
├── redux/
│   ├── store.js                  # Redux store configuration
│   ├── tableSlice.js             # Table state (records, search, pagination)
│   └── chartSlice.js             # Chart data state
│
├── providers/
│   └── ReduxProvider.jsx         # Redux Provider wrapper
│
└── lib/
    └── dummyData.js              # Seed data for the table
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard — pie chart summary view |
| `/development` | Detail view — full data table with CRUD operations |

---

## License

This project is for educational/internal use. Feel free to fork and extend.
