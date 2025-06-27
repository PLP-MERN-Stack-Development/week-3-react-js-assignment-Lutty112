# 🧠 Task & API Manager App

A modern, responsive React application built with Vite, Tailwind CSS, and ShadCN UI components. It allows users to manage tasks locally and view external API data with filtering and search functionality.

---

## 🚀 Features

- 📝 Task Manager with Add, Delete, and Filter (All / Active / Completed)
- 🌐 API Page that fetches and displays posts with a live search bar
- 🌗 Theme toggle (Light/Dark) with persistence
- 💅 Fully styled with Tailwind CSS and ShadCN UI
- 📱 Responsive design for mobile, tablet, and desktop
- 🔍 Tab-based navigation (no routing)

---

📂 Project Structure
bash

src/
├── api/               # API integration (fetchPosts.js)
├── components/
│   ├── TaskManager.jsx
│   ├── ui/            # ShadCN UI components
│   └── Layout.jsx
├── context/           # Theme Context
├── pages/             # API Page
├── App.jsx            # Main App
└── main.jsx
---

## 🖼️ Screenshots

### ✅ Task Manager Tab  
![Task Manager](<Tab1.png>)

### ✅ API Page Tab  
![API Page](<Tab2.png>)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-api-app.git
cd task-api-app

### 2. Install Dependencies

```bash
pnpm install

### 3. Start the Development Server

```bash
npm run dev

Then open: http://localhost:5173

---

🌍 Deployment
The app is deployed and publicly available at:

🔗 Live URL: https://your-deployment-url.vercel.app

▶️ It was deployed using:

GitHub Pages (Requires custom Vite config)

---

📦 Tech Stack
React + Vite

Tailwind CSS

ShadCN UI

Context API + Hooks

Vercel (Deployment)
 


👩‍💻 Author
Lutfia Mosi — GitHub 