import { useState } from "react"
import { MdDarkMode } from "react-icons/md"
import {HiMenuAlt3} from 'react-icons/hi'
import { BsFillSunFill } from "react-icons/bs"
import {IoMdClose} from 'react-icons/io'

const tabs = [
  { id: "#home", title: "home" },
  { id: "#features", title: "features" },
  { id: "#about", title: "about us" },
]

export default function Navbar({darkMode,menuOpen,setMenuOpen}) {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <>
      <nav className="w-full h-20 fixed top-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur  text-slate-500 dark:text-slate-100 z-10">
        <div className="w-[90%] sm:w-[85%] 2xl:w-[80%] mx-auto h-full flex items-center">
          <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-slate-400 to-cyan-400 dark:from-cyan-300 dark:to-white tracking-tight">
            HooBank
          </h2>

          <div className="ml-auto hidden lg:flex items-center gap-x-20">
            <ul className="flex items-center gap-x-6 lg:gap-x-10">
              {tabs.map(({ title, id }, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(title)}
                  className={
                    activeTab == title
                      ? "text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-200 via-white dark:to-cyan-400"
                      : ""
                  }
                >
                  <a
                    href={id}
                    className="capitalize tracking-wide text-lg 2xl:text-xl font-medium transition-all duraion-200 ease-out"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <DarkModeToggler darkMode={darkMode} />
          </div>
          <div className="ml-auto flex gap-x-8 lg:hidden">
            <button
              onClick={() => {
                setMenuOpen((prev) => !prev)
              }}
              className="text-slate-800 dark:text-white"
            >
              {menuOpen ? (
                <IoMdClose fontSize={30} />
              ) : (
                <HiMenuAlt3 fontSize={30} />
              )}
            </button>
            <DarkModeToggler darkMode={darkMode} />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="w-full h-full fixed inset-0 translate-y-20 bg-slate-900/90 transition-transform duration-500 ease-out">
          <ul className="w-full flex flex-col items-center gap-y-40 text-white p-20">
            {tabs.map(({ title, id }, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveTab(title)
                  setMenuOpen(false)
                }}
                className={activeTab == title ? "text-cyan-400" : ""}
              >
                <a
                  href={id}
                  className="capitalize tracking-wide text-2xl font-medium transition-all duraion-200 ease-out"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}


const DarkModeToggler = ({darkMode}) => {
  const toggledarkMode= ()=> {
    localStorage.setItem("darkMode", !darkMode)
    location.reload()
  }
  
  return (
    <button onClick={toggledarkMode}>
      {darkMode ? (
        <BsFillSunFill fontSize={30} className="text-yellow-500" />
      ) : (
        <MdDarkMode fontSize={30} className=" text-indigo-800" />
      )}
    </button>
  )
}