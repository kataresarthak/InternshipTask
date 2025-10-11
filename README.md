# Modern Task Manager

A modern task management and guidance application built with React, TypeScript, and Supabase

## 🚀 Project Overview

This project demonstrates a full-stack task management application with user authentication, CRUD operations, and modern UI/UX design.

## 📁 Project Structure

```
frontend-task/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── integrations/   # Supabase integration
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
├── backend/                 # Supabase backend
│   ├── supabase/           # Database migrations
│   └── .env                # Environment variables
├── docs/                   # Documentation
│   ├── POSTMAN_COLLECTION.json  # API testing collection
│   ├── SCALING.md          # Scaling strategy document
│   └── screenshots/        # Application screenshots
└── README.md               # This file
```

## ✨ Features Implemented

### 🔐 Authentication System
- **User Registration**: Secure user signup with email validation
- **User Login**: JWT-based authentication with Supabase
- **Protected Routes**: Route protection with authentication guards
- **User Profile**: User profile management and dashboard

### 📋 Task Management
- **CRUD Operations**: Create, Read, Update, Delete tasks
- **Task Status**: Pending, In Progress, Completed status tracking
- **Priority Levels**: High, Medium, Low priority assignment
- **Search & Filter**: Real-time search and status filtering
- **Due Dates**: Task deadline management

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first responsive layout
- **Component Library**: shadcn/ui components with Radix UI
- **Dark/Light Theme**: Theme switching capability
- **Accessibility**: WCAG compliant components
- **Loading States**: Skeleton loaders and loading indicators

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Form Validation**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Real-time Updates**: Supabase real-time subscriptions
- **Error Handling**: Comprehensive error boundaries and handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **React Router DOM** - Client-side routing
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **TanStack Query** - Server state management
- **Lucide React** - Beautiful icon library

### Backend
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database
- **Row Level Security** - Database-level security
- **Real-time Subscriptions** - Live data updates
- **JWT Authentication** - Secure token-based auth

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Vite** - Development and build tooling

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/frontend-task.git
   cd frontend-task
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cd ../backend
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

4. **Start the development server**
   ```bash
   cd ../frontend
   npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:8080`
