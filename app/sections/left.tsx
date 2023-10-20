import { Major_Mono_Display, Montserrat } from "next/font/google"
import Footer from "../components/footer"
import { motion } from "framer-motion"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const major_mono_display = Major_Mono_Display({ subsets: ['latin'], weight: ["400"] })


export default function Left() {

    const transition = {
        duration: 1,
        ease: "easeInOut"
    }

    return <main className="hidden xl:flex w-full min-h-screen flex-col gap-4 relative p-12 " >
        <div className={"grow w-full flex flex-col pt-24 pb-0 " + montserrat.className}>
            <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.5 }}
                className="text-3xl font-light ">Bringing your ideas to life <br />  online.</motion.h3>
            <div className="absolute top-1/2 transform -translate-y-1/2 
            right-24 left-12 text-end flex flex-col gap-2">
                <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...transition }}
                    className={"text-8xl " + major_mono_display.className}>Kreatis</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, delay: 0.25 }}
                    className="text-xl font-light pr-2">Web Development Studio.
                </motion.p>
            </div>
        </div>

        <Footer />
    </main>
}