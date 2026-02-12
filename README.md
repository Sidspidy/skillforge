# 🧠 SkillForge

> A full-stack skill tracking and weekly planning app built with **React + Tailwind CSS** on the frontend and **Node.js + Express + Prisma** on the backend.

---

## 🚀 Features

- 🔐 User authentication (register/login with JWT)
- 🧭 Personal dashboard with goal analytics
- 📆 Weekly planner with goals & progress tracking
- 🧠 Skills & categories management
- 📊 Visual productivity insights & moments
- ✍️ Profile management

---

## 🛠️ Tech Stack

| Frontend     | Backend        | Database   |
| ------------ | -------------- | ---------- |
| React + Vite | Node + Express | PostgreSQL |
| Tailwind CSS | Prisma ORM     |            |
| Axios + JWT  | CORS, Dotenv   |            |

---

## 📂 Project Structure
```

skillforge/
├── frontend/ # React + Tailwind UI
├── backend/ # Express + Prisma + Controllers
└── README.md

````

---

## 🔧 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/Sidspidy/skillforge.git
cd skillforge
````

### 2. Frontend Setup

```bash
cd skillforge-frontend
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd skillforge-backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

> Create a `.env` file in `backend/` with:

```
DATABASE_URL=postgresql://user:password@host:port/dbname
JWT_SECRET=your_super_secret_key
```

---

## 🌐 API Endpoints

| Route            | Description         |
| ---------------- | ------------------- |
| `/api/auth`      | Register/Login      |
| `/api/dashboard` | Goal analytics      |
| `/api/profile`   | Get & edit user     |
| `/api/category`  | CRUD categories     |
| `/api/skill`     | CRUD skills         |
| `/api/planner`   | Weekly plan & goals |

---

## 🌍 Deployment

- **Frontend**: Vercel
- **Backend**: Render

---

## 📸 Preview

> Include a screenshot here for the dashboard or planner UI.

---

## 💡 Inspiration

Built to help developers track goals, master skills, and stay consistent every week.

---

## 🧑‍💻 Author

**ShadowStorm**
[GitHub](https://github.com/Sidspidy)

---

## 🏁 License

MIT © SkillForge

```

