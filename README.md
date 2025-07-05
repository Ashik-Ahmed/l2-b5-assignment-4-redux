# BookNest Library Management System

A modern, full-stack library management web application built with React, Redux Toolkit, TypeScript, and Vite. This project allows users to manage books, borrow records, and provides a clean, responsive UI.

## Features

- 📚 View, add, edit, and delete books
- 🔍 Search and filter books
- 📝 Borrow books and track borrow records
- 🛠️ Built with React, Redux Toolkit, TypeScript, and Vite
- 🎨 Modern UI with custom components
- 🌐 REST API integration

## Tech Stack

- **Frontend:** React, TypeScript, Redux Toolkit, Vite
- **UI Components:** Custom, Shadcn UI, Lucide Icons
- **State Management:** Redux Toolkit, RTK Query
- **Backend API:** [Node.js/Express/MongoDB] (hosted, not included in this repo)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/l2-b5-assignment-4-redux.git
   cd l2-b5-assignment-4-redux
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your API URL:
     ```env
     VITE_API_URL=https://your-api-url.com/api
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # UI and module components
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components (books, borrow, homepage)
│   ├── redux/            # Redux store, API, and features
│   ├── routes/           # App routes
│   └── main.tsx          # App entry point
├── types.ts              # TypeScript types
├── package.json
├── vite.config.ts
└── ...
```

## API Reference

- The app expects a REST API with endpoints for books and borrow records.
- Configure the API base URL in `.env.local` as `VITE_API_URL`.

## Deployment

- Easily deployable to Vercel, Netlify, or any static hosting provider.
- Ensure your backend API supports CORS for your frontend domain.

## License

This project is licensed under the MIT License.

---

**Made with ❤️ for educational purposes.**
