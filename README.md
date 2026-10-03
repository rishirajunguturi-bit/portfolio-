# Personal Developer Portfolio — Unguturi Sai Venkata Rishi Raj

A full-stack, developer portfolio website for **Unguturi Sai Venkata Rishi Raj**, a B.Tech Computer Science and Engineering student at Prasad V. Potluri Siddhartha Institute of Technology.

Focused on **Data Structures & Algorithms**, **Problem Solving**, **Full-Stack Development**, and **Practical AI/Machine Learning**.

---

## 🏗️ Architecture Overview

```
Visitor / User Browser
        │
        ├───────────── React + Vite Frontend (Port 5173) ─────────────┐
        │  • Tailwind CSS v4 Dark Design System                       │
        │  • Framer Motion Micro-Animations & Scroll Reveals          │
        │  • Modular Data Architecture & Accessible Components        │
        │                                                             │
        └─────── POST /api/contact ──────┐                            │
                                         ▼                            │
                       Node.js + Express Backend (Port 5000) ─────────┘
                        • CORS Security & Input Validation
                        • Centralized Error Middleware
                        • Mongoose ODM
                                         │
                                         ▼
                               MongoDB Atlas Database
                        • Contact Submissions Collection
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Custom SVG components & Lucide React
- **Data Layer:** Centralized JS Data Architecture (`src/data/`)

### Backend & Database
- **Runtime:** Node.js (ES Modules)
- **Web Framework:** Express.js
- **Database:** MongoDB Atlas via Mongoose ODM
- **Middleware & Security:** CORS, dotenv, Centralized Error Handler

---

## 📁 Project Directory Structure

```text
portfolio/
├── server/                           # Node.js + Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # Mongoose MongoDB Connection
│   │   ├── controllers/
│   │   │   └── contactController.js  # POST & GET /api/contact Controllers
│   │   ├── middleware/
│   │   │   └── errorHandler.js       # Centralized Error Middleware
│   │   ├── models/
│   │   │   └── Contact.js            # Contact Submission Mongoose Schema
│   │   ├── routes/
│   │   │   └── contactRoutes.js       # API Routes (/api/contact)
│   │   ├── app.js                    # Express Application Setup & CORS
│   │   └── server.js                 # Backend Server Entry Point
│   ├── .env.example
│   └── package.json
│
├── src/                              # React Frontend Source
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx                # Fixed Navigation Bar with Mobile Drawer
│   │   ├── Hero.jsx                  # Personal Intro & Call-to-Actions
│   │   ├── About.jsx                 # Student Bio & Academic Profile
│   │   ├── Skills.jsx                # Categorized Technical Skills (No percentage bars)
│   │   ├── Projects.jsx              # Featured Project Showcase
│   │   ├── ProjectCard.jsx           # Individual Project Visual Card
│   │   ├── ProblemSolving.jsx        # DSA Focus & Platform Badges
│   │   ├── Education.jsx             # Vertical Education Timeline
│   │   ├── Certifications.jsx        # Verified Certifications Grid
│   │   ├── Contact.jsx               # Interactive Contact Form + Direct Links
│   │   ├── Footer.jsx                # Minimal Footer
│   │   └── SocialIcons.jsx           # SVG Icon Helpers (GitHub, LinkedIn)
│   ├── data/
│   │   ├── profile.js                # Personal Information & Social URLs
│   │   ├── skills.js                 # Categorized Technologies
│   │   ├── projects.js               # Project Data (MedAR, SkillTern, etc.)
│   │   ├── problemSolving.js         # DSA Platforms (LeetCode, CodeChef, etc.)
│   │   ├── education.js              # Academic History
│   │   └── certifications.js         # Verified Training Cards
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                     # Tailwind CSS Imports & Dark Theme Tokens
│
├── public/                           # Static Assets & SVG Illustrations
│   ├── images/                       # Project Mockup Visuals (SkillTern, MedAR, etc.)
│   └── favicon.svg                   # Custom Favicon
│
├── .env.example                      # Root Environment Variables Example
├── package.json                      # Root Dependencies & Frontend Scripts
├── vite.config.js                    # Vite Configuration
└── README.md                         # Project Documentation
```

---

## 🔑 Environment Variables Configuration

Create a `.env` file in the root directory (or inside `/server`):

```env
# Server Configuration
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173

# Frontend Configuration (Vite)
VITE_API_URL=http://localhost:5000
```

---

## 🚀 Local Development Setup

### 1. Install Dependencies

#### Frontend:
```bash
npm install
```

#### Backend:
```bash
cd server
npm install
cd ..
```

### 2. Start Servers

#### Run Frontend Dev Server (Port 5173):
```bash
npm run dev
```

#### Run Backend Server (Port 5000):
```bash
npm run server
```

---

## 📡 API Endpoint Reference

### `POST /api/contact`
Submits a message from the portfolio contact form to the MongoDB database.

#### Request Body:
```json
{
  "name": "Unguturi Sai Venkata Rishi Raj",
  "email": "rishirajunguturi@gmail.com",
  "subject": "Internship Inquiry",
  "message": "Hello, I would like to discuss an opportunity."
}
```

#### Success Response (`201 Created`):
```json
{
  "success": true,
  "message": "Message received successfully.",
  "data": {
    "id": "65f2a1b9c8d3e4001a2b3c4d",
    "name": "Unguturi Sai Venkata Rishi Raj",
    "createdAt": "2026-10-03T20:00:00.000Z"
  }
}
```

---

## 🌐 Deployment Guidance

- **Frontend (Vite + React):** Deploy directly to [Vercel](https://vercel.com/) or Netlify. Set `VITE_API_URL` environment variable to your deployed backend URL.
- **Backend (Node.js + Express):** Deploy to [Render](https://render.com/) or Railway. Configure `MONGODB_URI` and `CLIENT_URL`.
- **Database:** Hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 📄 License & Attribution

Developed by **Unguturi Sai Venkata Rishi Raj** © 2026. All rights reserved.
