import { FaPercentage } from "react-icons/fa";
import {robot} from '../assets'

import SubTitle from "./utils/SubTitle"

export default function Header(){
    return (
      <section
        id="home"
        className="w-[90%] sm:w-[85%] 2xl:w-[80%] mx-auto mt-28 flex flex-col lg:flex-row items-center gap-16"
      >
        <div className="mt-6 flex-1 h-full flex flex-col">
          <div className="w-fit px-2 sm:px-4 py-1 flex items-center sm:gap-x-1 text-sm sm:text-base lg:text-lg uppercase bg-gray-50 dark:bg-gray-700/40 text-slate-600 dark:text-slate-300 rounded-xl shadow-lg font-medium whitespace-nowrap">
            <span className="bg-gray-50 dark:bg-gray-900/30 p-3 rounded-full">
              <FaPercentage className="text-cyan-500 text-lg" />
            </span>
            <span>
              <strong className="text-slate-800 dark:text-white mx-2 text-lg lg:text-xl">
                20%
              </strong>
              discount for
              <strong className="text-slate-800 dark:text-white mx-2 text-lg lg:text-xl">
                1 month
              </strong>
              account
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-y-2 sm:gap-y-4 tracking-wide text-3xl sm:text-5xl 2xl:text-6xl text-slate-700 dark:text-white font-bold capitalize">
            <span className="">the next</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white">
              generation
            </span>
            <span>payment method.</span>
          </div>

          <SubTitle>
            our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
            <br />
            we examine annual percentage rates, annual fees.
          </SubTitle>
        </div>

        <div className="w-full sm:w-10/12 lg:w-1/2  flex justify-center">
          <img
            src={robot}
            alt="robot"
            className="h-auto lg:h-auto object-cover"
          />
        </div>
      </section>
    )
}


