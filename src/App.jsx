import { useEffect, useState } from 'react';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function App(){
  const [menuOpen, setMenuOpen]=useState(false)

  const [darkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ??
      matchMedia("(prefers-color-scheme: dark)").matches
  )

  const handleSystemModeChange= (e) => {
    const isDark = e.matches ? true : false
    localStorage.setItem("darkMode", isDark)
  }

  useEffect(() => {
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleSystemModeChange)

    if (!localStorage.getItem("darkMode")) {
      localStorage.setItem("darkMode", darkMode)
    }

    const myApp = document.querySelector("html")
    if (darkMode) {
      myApp.classList.add("dark")
    } else {
      myApp.classList.remove("dark")
    }

    return ()=>  {
      matchMedia("(prefers-color-scheme: dark)").removeEventListener(
        "change",
        handleSystemModeChange
      )
    }
  }, [darkMode])

  return (
    <div className='w-full h-screen text-slate-900 dark:text-slate-100 bg-gradient-to-l from-gray-200/50 dark:from-black to-gray-50 dark:to-slate-900 select-none overflow-scroll'>
      <Navbar darkMode={darkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header />
      <Features />
      <About />
      <Footer darkMode={darkMode} />
    </div>
  )
}