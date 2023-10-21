import { Major_Mono_Display, Montserrat } from "next/font/google"
import Footer from "../components/footer"
import { AnimatePresence, motion } from "framer-motion"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const major_mono_display = Major_Mono_Display({ subsets: ['latin'], weight: ["400"] })


export default function Left({ title = "Kreatis", subTitle = "Web development agency" }: {
    title?: string,
    subTitle?: string,
}

) {

    const transition = {
        duration: 0.5,
        ease: "easeInOut"
    }

    return <main className="flex w-full min-h-screen flex-col gap-4 xl:relative p-6 xl:p-8 2xl:p-12 " >
        <div className={"grow w-full flex flex-col pt-12 2xl:pt-24 pb-0 " + montserrat.className}>
            <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.5 }}
                className="text-xl xl:text-3xl font-light ">Bringing your ideas to life <br />  online.</motion.h3>

            <div className="grow py-24 xl:hidden h-full ">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...transition }}
                    exit={{ opacity: 0, x: 100 }}

                    className={"text-[15vmin] xl:text-8xl " + major_mono_display.className}>{title}</motion.h1></div>
            <AnimatePresence>
                <div
                    key={title}
                    className="hidden py-24 xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 
            xl:right-24 xl:left-12 text-center xl:text-end xl:flex flex-col gap-2">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...transition }}
                        exit={{ opacity: 0, x: 100 }}

                        className={"text-[15vmin] xl:text-8xl  " + major_mono_display.className}>{title}</motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ ...transition }}
                        className="hidden xl:block text-xl font-light pr-2">{subTitle}
                    </motion.p>
                </div></AnimatePresence>
        </div>

        <Footer />
    </main>
}