import React from 'react'


export default function Button({ children }){
    return (
      <button className="mt-10 px-10 py-4 bg-gradient-to-tl from-cyan-500 to-cyan-50 focus:from-cyan-700 focus:to-cyan-100 text-slate-800 focus:text-black text-lg font-semibold tracking-wide capitalize rounded-lg shadow-gray-300 dark:shadow-cyan-900 shadow-2xl whitespace-nowrap">
        {children}
      </button>
    )
}