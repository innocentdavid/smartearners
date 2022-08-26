import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsArrowUp, BsArrowRight } from 'react-icons/bs'
import { AiOutlineShareAlt } from 'react-icons/ai'

export default function Investreturn() {
  const router = useRouter()
  const [user, setUser] = useState({
    id: 1, userName: '0x9***384', myTicket: 0, balance: 350
  })

  return (
    <>
      <Head>
        <title>{"20% Share of Lv.1's Daily Return"} - Smart Earners</title>
        <meta name="description" content="20% Share of Lv.1's Daily Return" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-between items-center px-8 py-2">
        <div className="cursor-pointer rotate-[270deg]" onClick={() => { router.back() }}><BsArrowUp size="20px" /></div>

        <div className="flex items-center gap-3 text-[.8em] font-semibold font-['Metric-Medium'] ">
          <div className="flex flex-col items-center text-center text-[.6rem]">{"I've"} <br /> earned <strong className="font-Josefin text-lg">{user?.roi || 0}</strong></div>
          <div className="border-r border-[#fff3dc] h-[60%]"></div>
          <div className="flex flex-col items-center text-center text-[.6rem]">{"I'm earning"} <br /> today <strong className="font-Josefin text-lg">₦<span>{user?.balance}</span></strong></div>
        </div>
      </nav>

      <header className="bg-[#242931] text-[#fff] py-4 px-5 font-Josefin text-[14px]">
        <div className="flex items-center gap-4">
          <div className=""><img src="/images/901789.png" width="20px" height="20px" /></div>
          <div className="font-bold text-[.9rem] md:text-[1rem] -mb-1">20% Share of Lv.1's Daily Return</div>
        </div>

        <p className="mt-3 text-[.75rem]">{"When your Level 1 referrals start to obtain daily return from his investment plans, you will obtain a 20% extra share of that return on a daily basis as well."}</p>
      </header>

      <section className="mt-4">
        <div className="">
          <ul className="flex w-full text-[#333] text-[.8rem]">
            <li className="font-['Metric-Regular'] border-r border-gray-300 flex flex-col justify-center items-center text-center w-[25%]"><p>Time</p> </li>
            <li className="font-['Metric-Regular'] border-r border-gray-300 flex flex-col justify-center items-center text-center w-[25%]"><p>ID</p> </li>
            <li className="font-['Metric-Regular'] border-r border-gray-300 flex flex-col justify-center items-center text-center w-[25%]"><p>Total<br />Deposit</p></li>
            <li className="font-['Metric-Regular'] flex flex-col justify-center items-center text-center w-[25%]">
              <p>My<br /> Commission</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}