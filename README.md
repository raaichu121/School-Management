# School Management System

A modern, full-stack School Management System built with **React**, **Vite**, and **Supabase**. This platform is designed to streamline administrative tasks, manage student/teacher data, and provide a seamless interface for educational institutions.

🚀 **Live Demo:** [https://school-management-peach-one.vercel.app/](https://school-management-peach-one.vercel.app/)

## ✨ Features

* **Dashboard:** Real-time overview of school statistics.
* **Student Management:** Comprehensive profiles, enrollment tracking, and academic records.
* **Teacher/Staff Portals:** Manage faculty details and assignments.
* **Supabase Integration:** Real-time database updates and secure authentication.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile using Tailwind CSS.
* **Modern UI:** Built with Shadcn UI for a professional, high-quality aesthetic.

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **Backend/Database:** [Supabase](https://supabase.com/) (PostgreSQL + Auth)
* **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

* Node.js (v18.0 or higher)
* npm or yarn
* A Supabase account

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/raaichu121/School-Management.git
cd School-Management

```


2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

```


4. **Run the development server:**
```bash
npm run dev

```


The application will be available at `http://localhost:5173`.

## 📦 Project Structure

```text
├── src/
│   ├── components/     # Reusable UI components (Shadcn)
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Supabase client and types
│   ├── pages/          # Main application views (Auth, Dashboard, etc.)
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main Routing and App logic
├── supabase/           # Database migrations and configurations
├── public/             # Static assets
└── tailwind.config.ts  # Styling configuration

```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

