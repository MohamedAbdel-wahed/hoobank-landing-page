import React from 'react';


export default function SubTitle({children}){
    return (
      <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-snug first-letter:capitalize break-words">
        {children}
      </p>
    )
}