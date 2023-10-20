import { Montserrat } from "next/font/google"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Reason({ index, title, reason }: { index: number, title: string, reason: string }) {

    const ref = useRef(null)
    const isInView = useInView(ref);


    const ref1 = useRef(null)
    const isInView1 = useInView(ref1);


    return <div className="py-12 px-12 xl:h-screen xl:p-36 flex flex-col justify-center gap-4 xl:gap-12">
        <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            ref={ref}
            className={"xl:text-8xl font-semibold " + montserrat.className} >
            {title}
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.25
            }}
            ref={ref1}
            className="text-xl font-light">
            {reason}
        </motion.p>
    </div>
}