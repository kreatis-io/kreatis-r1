import { Montserrat } from "next/font/google";
import { motion } from "framer-motion"
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Footer() {

    const transition = {
        duration: 0.5,
        ease: "easeInOut"
    }

    const variants = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }

    return <footer className="xl:sticky mb-12 xl:mb-0">
        <div className="flex flex-col xl:flex-row justify-end gap-12 columns-3">
            <motion.div
                initial={variants.initial}
                animate={variants.animate}
                transition={{ ...transition, delay: 0.5 }}
                className="xl:w-1/4 flex flex-col gap-4 items-start text-start">
                <h3 className={"text-md font-semibold" + montserrat.className}>What we do</h3>
                <ul className="text-sm font-light">
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>Branding</li>
                    <li>SEO</li>
                </ul>
            </motion.div>

            <motion.div
                initial={variants.initial}
                animate={variants.animate}
                transition={{ ...transition, delay: 0.25 }}
                className="xl:w-1/4 flex flex-col gap-4 items-start text-start">
                <h3 className={"text-md font-semibold" + montserrat.className}>Navigation</h3>
                <ul className="text-sm font-light">
                    <li>
                        <Link
                            className="underline"
                            href="#portfolio"
                        >Our projects</Link>
                    </li>
                    <li>
                        <Link
                            className="underline"
                            href="#why"
                        >Why you need a website</Link>
                    </li>   <li>
                        <Link
                            className="underline"
                            href="#contact"
                        >Contact us</Link>
                    </li>
                </ul>
            </motion.div>
            <motion.div
                initial={variants.initial}
                animate={variants.animate}
                transition={{ ...transition }}
                className="w-2/4 flex flex-col gap-4 items-start text-start">
                <h3 className={"text-md font-semibold" + montserrat.className}>Contact</h3>
                <ul className="text-sm font-light">
                    <li>
                        <Link
                            className="underline"
                            href="#contact">Contact form</Link>
                    </li>
                    <li>contact@kreatis.io</li>
                    <li>acutewoof@kreatis.io</li>
                </ul>
            </motion.div>
        </div>
    </footer>;
}