import React from 'react';
import { logoDark, logoLight } from '../assets';


const footerList = [
  {
    title: "useful links",
    list: [
      {
        title: "content",
        url: "#",
      },
      {
        title: "how to works",
        url: "#",
      },
      {
        title: "create",
        url: "#",
      },
      {
        title: "explore",
        url: "#",
      },
      {
        title: "terms & services",
        url: "#",
      },
    ],
  },
  {
    title: "community",
    list: [
      {
        title: "help center",
        url: "#",
      },
      {
        title: "partners",
        url: "#",
      },
      {
        title: "suggestions",
        url: "#",
      },
      {
        title: "blog",
        url: "#",
      },
      {
        title: "newsletters",
        url: "#",
      },
    ],
  },
  {
    title: "partner",
    list: [
        {
            title: "our partner",
            url: "#"
        },
        {
            title: "become a partner",
            url: "#"
        }
    ],
  },
]

export default function Footer({darkMode}){
    return (
      <div className="w-[90%] sm:w-[85%] 2xl:w-[80%] h-auto mx-auto p-10 bg-transparent ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <img
              src={darkMode ? logoDark : logoLight}
              alt="logo"
              className="w-80"
            />
            <p className="mt-6 text-base text-slate-700 dark:text-slate-300 leading-snug first-letter:capitalize break-words">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          {footerList.map((item, index) => (
            <FooterColumn key={index} {...item} />
          ))}
        </div>

        <div className="mt-10 pt-4 border-t border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Copyright &copy; </span>
          <span>2021 HooBank. All Rights Reserved.</span>
        </div>
      </div>
    )
}


const FooterColumn= ({title,list})=> {
    return (
      <div className="ml-20 self-start flex flex-col gap-y-3 capitalize">
        <h4 className="text-lg font-medium text-slate-700 dark:text-slate-100">{title}</h4>
        <ul className="flex flex-col gap-y-1.5">
          {list.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="hover:underline text-slate-500 dark:text-slate-300">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
}