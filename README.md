# 🎓 VIT ClubHub

[![Made with React](https://img.shields.io/badge/Made%20with-React-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/AmanTiwari404/Vit-ClubHub/ci.yml?label=CI%20Build)](https://github.com/AmanTiwari404/Vit-ClubHub/actions)

---

**A modern student clubs & events platform** — centralizes club management, event creation, registrations, and analytics in a dual-portal (Student + Admin) web app built for colleges.  
Polished UI, secure backend, and full-stack scalability — designed to impress recruiters and demonstrate production-grade development skills.

---

<div align="center">
  <table>
    <tr>
      <td><img src="./frontend/screenshots/LoginPage.png" alt="Login Page" width="350"/></td>
      <td><img src="./frontend/screenshots/ClubPage.png" alt="Club Page" width="350"/></td>
    </tr>
    <tr>
      <td><img src="./frontend/screenshots/StudentDashboard.png" alt="Student Dashboard" width="350"/></td>
      <td><img src="./frontend/screenshots/AdminDashboard.png" alt="Admin Dashboard" width="350"/></td>
    </tr>
  </table>
</div>

---

## 🚀 Project Overview

VIT ClubHub was designed to **eliminate fragmented event communication** and spam across multiple clubs at VIT Bhopal.  
It provides a unified interface for **students** to explore, register, and participate — and for **admins** to manage events, attendance, and analytics effortlessly.

### 💡 Key Highlights
- Real-world product solving actual student community pain points.
- Demonstrates end-to-end full-stack engineering.
- Role-based authentication, modular code, and reusable UI components.
- Fully responsive and ready for deployment (Render + Vercel).

---

## 🧭 Features

### 👩‍🎓 Student Portal
- Browse & join clubs by category (Technical, Non-Technical, Regional)
- Register for upcoming events with one click
- Track participation history and rates
- Explore events with filters and categories

### 👨‍💼 Admin Portal
- Create, edit, and manage events
- Set deadlines, capacities, and locations
- Track total registrations and attendance
- Upload event images and materials
- View event analytics and participation stats

### ⚙️ Platform Features
- Role-based Authentication (Students, Club Admins, Super Admin)
- Event lifecycle: `Draft → Published → Registration Closed → Completed`
- RESTful APIs and JWT Authentication
- File/Image upload with Cloudinary (or local fallback)
- Responsive, modern UI built with Tailwind CSS

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, Vite, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JWT-based (JSON Web Token) |
| **Storage** | Cloudinary / AWS S3 |
| **DevOps** | Docker, GitHub Actions CI/CD |
| **Deployment** | Render (Backend), Vercel (Frontend) |

---


- **Frontend:** Handles UI/UX, authentication, and API integration.  
- **Backend:** Provides secure APIs, role management, and business logic.  
- **Database:** Stores clubs, users, events, and registrations.  
- **Cloud:** Stores images and assets for scalability.

---

## ⚡ Quick Start (Local Setup)

### 🧩 Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn
- Docker (optional)

### 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/AmanTiwari404/Vit-ClubHub.git
cd Vit-ClubHub

# Setup environment
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start backend
cd ../backend
npm run dev

# Start frontend
cd ../frontend
npm run dev



