import { useEffect, useState } from "react"
import { Montserrat } from "next/font/google"
import Piece from "./piece"

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Portfolio() {
    const [projects, setProjects] = useState([
        {
            "title": "",
            "description": "",
            "link": "",
            "image": "",
            "backgroundClassName": "",
            "textClassName": ""
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

    useEffect(() => {
        console.log(projects)
    }, [projects])

    return <div className="min-h-screen flex flex-col items-center justify-center" >
        {projects &&
            projects.map((project, index) => {
                return <Piece key={index} title={project.title} description={project.description} image={project.image} link={project.link} backgroundClassName={project.backgroundClassName} textClassName={project.textClassName} />
            })
        }
    </div>
}