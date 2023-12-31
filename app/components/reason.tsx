import { Montserrat } from "next/font/google"
import { motion, useInView, } from "framer-motion"
import { useRef } from "react"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Reason({ index, title, reason }: { index: number, title: string, reason: string }) {

    const ref = useRef(null)
    const isInView = useInView(ref);

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1);


    return <div

        className="w-full xl:max-w-[50vw] py-12 px-12 xl:h-screen xl:p-36 flex flex-col justify-center xl:gap-12">
        <div
            className="flex flex-col gap-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                ref={ref}
                className={"lg:text-6xl 2xl:text-[5vw] font-semibold " + montserrat.className} >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={isInView1 && { opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.25
                }}
                ref={ref1}
                className="text-lg 2xl:text-[1vw] font-light">
                {reason}
            </motion.p></div>
    </div>
}