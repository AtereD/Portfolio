"use client"
import CountUp from "react-countup"
import { stats } from "@/constant"


const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-6 max-w-[80vw] mx-auto xl:max-w-none lg:grid-cols-4 lg:justify-items-center">
                {stats.map((item, index)=> {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start " key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6l font-extrabold"/>
                        <p className={`${item.text.length < 15 ? "md:max-w-[100px]" : "max-w-[100px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats