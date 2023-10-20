import { motion, useInView } from "framer-motion"
import Reason from "../components/reason"
import { useRef } from "react";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Why({ customRef }: {
    customRef: React.RefObject<HTMLDivElement>
}) {


    const ref2 = useRef(null)
    const isInView2 = useInView(ref2);

    const reasons: {
        title: string,
        reason: string
    }[] = [
            {
                title: "Credibility",
                reason: "A well-designed website adds legitimacy to your business, making customers more likely to trust you.",
            }, {
                title: "Marketing",
                reason: "We utilise SEO and online advertising to attract more customers at a lower cost than traditional methods."
            }, {
                title: "Customer Convenience",
                reason: "Customers can easily find information about your business and contact you at any time. Stand out from competitors who don't have an online presence.",
            }, {
                title: "Branding",
                reason: "A website is a canvas to showcase your brand's mission, values, and unique selling points."
            }
        ]


    return <section id="why"><motion.div ref={customRef} className="bg-gray-200 min-h-[150vh] flex flex-col items-center justify-center" >
        <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            ref={ref2}
            className={"xl:hidden text-xl xl:text-3xl font-light mb-12 w-full px-12 " + montserrat.className}>Why do I need a website?</motion.h3>
        {
            reasons.map((reason, index) => {
                return <Reason key={index} index={index} title={reason.title} reason={reason.reason} />
            })
        }
    </motion.div></section>
}