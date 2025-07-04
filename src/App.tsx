import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/module/Navbar/Navbar'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f1] via-[#f3e9e0] to-[#e9e4f0] flex flex-col font-serif" >
      <Toaster />
      <Navbar />
      <Outlet />
      {/* Footer */}
      <footer className="w-full mt-8 py-6 text-[#a67c52] text-sm text-center bg-white bg-opacity-80 border-t border-[#f3e9e0]">
        &copy; {new Date().getFullYear()} BookNest Library Management. All rights reserved.
      </footer>
    </div >
  )
}

export default App
