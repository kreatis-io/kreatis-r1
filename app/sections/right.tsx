import Portfolio from "../components/portfolio";
import { motion } from "framer-motion";

export default function Right() {
    return <motion.div
        initial={{
            opacity: 0,
            width: "0vw",
        }}
        animate={{
            opacity: 1,
            width: "50vw",
        }}
        transition={{
            duration: 2.5,
            ease: "easeInOut",
        }}
        className="bg-white xl:bg-slate-200 h-screen w-full">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="z-50 hidden xl:block text-sm absolute top-12 right-8 ">
            <div className="write-vertical xl:flex gap-4 items-center justify-center text-slate-400 mix-blend-multiply">
                <hr className="w-[0.1px] h-24 border-[0.5px] border-slate-400 " />Latest projects</div>
        </motion.div>

        <Portfolio />
    </motion.div>
}