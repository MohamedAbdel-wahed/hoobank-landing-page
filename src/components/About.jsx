import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  people01,
  people02,
  people03,
  people04,
} from "../assets"
import Button from "./utils/Button"

import Title from "./utils/Title"

const peopleList = [
  {
    name: "herman jensen",
    job: "founder & leader",
    photo: people01,
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    name: "steve mark",
    job: "founder & leader",
    photo: people02,
    description:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
  },
  {
    name: "kenn gallagher",
    job: "founder & leader",
    photo: people03,
    description:
      "It is usually people in the money business, finance, and international trade that are really rich.",
  },
  {
    name: "Mohamed Elkholy",
    job: "android developer",
    photo: people04,
    description:
      " Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  },
]

export default function About() {
  return (
    <div
      id="about"
      className="w-[90%] sm:w-[85%] 2xl:w-[80%] mx-auto my-28 flex flex-col gap-y-20"
    >
      <div className="">
        <Title>what people are saying about us</Title>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
          {peopleList.map((item, index) => (
            <UserCard key={index} {...item} />
          ))} 
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:justify-between gap-20 lg:gap-0 uppercase">
        <ItemCount title="users active" count="3600+" />
        <ItemCount title="trusted by company" count="230+" />
        <ItemCount title="transaction" count="$230M" />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-x-10 lg:gap-x-20 px-10 lg:px-20 py-10 bg-white dark:bg-gradient-to-tr dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-slate-900">
        <div className="flex flex-col">
          <Title>let’s try our service now!</Title>
          <p className="mt-6 tracking-wide text-slate-700 dark:text-slate-200 leading-snug first-letter:capitalize whitespace-wrap">
            everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button>get started</Button>
      </div>

      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 place-items-center gap-16">
        <img src={airbnb} alt="airbnb-logo" className="w-52 object-contain" />
        <img src={binance} alt="airbnb-logo" className="w-52 object-contain" />
        <img src={coinbase} alt="airbnb-logo" className="w-52 object-contain" />
        <img src={dropbox} alt="airbnb-logo" className="w-52 object-contain" />
      </div>
    </div>
  )
}

const ItemCount = ({ title, count }) => (
  <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-6 whitespace-nowrap">
    <span className="font-bold text-3xl text-slate-800 dark:text-white">
      {count}
    </span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-600 dark:to-white text-xl font-semibold">
      {title}
    </span>
  </div>
)

const UserCard = ({ name, job, photo, description }) => (
  <div className="flex flex-col justify-between gap-y-12 p-6 bg-white dark:bg-gradient-to-tl dark:from-slate-900/90 dark:to-slate-800/80 rounded-xl shadow-lg shadow-gray-300 dark:shadow-slate-900">
    <p className="text-lg text-slate-800 dark:text-slate-200 first-letter:capitalize break-words">
      {description}
    </p>
    <div className="flex items-center gap-x-3">
      <img src={photo} alt={name} className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover" />
      <div className="flex flex-col gap-y-1 capitalize">
        <h4 className="text-slate-900 dark:text-slate-200 text-xl font-medium whitespace-nowrap">
          {name}
        </h4>
        <span className="text-slate-600 dark:text-slate-300/90 tracking-wide">
          {job}
        </span>
      </div>
    </div>
  </div>
)
