import { useEffect, useState } from "react"
import Piece from "../components/piece"
import { motion } from "framer-motion"

export default function Portfolio({ customRef }: {
    customRef: React.RefObject<HTMLDivElement>
}) {
    const [projects, setProjects] = useState([
        {
            "title": "",
            "description": "",
            "link": "",
            "image": "/images/woof-os.png",
            "backgroundClassName": "",
            "textClassName": "",
            "mobileImage": ""
        }
    ])

    const getProjects = async () => {
        const res = await fetch("/projects.json")
        const data = await res.json()
        setProjects(data.projects)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return <section id="portfolio">
        <motion.div ref={customRef} className="min-h-screen flex flex-col items-center justify-center" >
            {projects &&
                projects.map((project, index) => {
                    return <Piece key={index} index={index} title={project.title} description={project.description} image={project.image} link={project.link} backgroundClassName={project.backgroundClassName} textClassName={project.textClassName} mobileImage={project.mobileImage} />
                })
            }
        </motion.div></section>
}