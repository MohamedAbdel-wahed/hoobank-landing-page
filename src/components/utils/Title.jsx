import React from 'react'


export default function Title({children}) {
  return (
    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold leading-relaxed capitalize break-words">
      {children}
    </h2>
  )
}