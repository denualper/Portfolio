import Link from "next/link"
import { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {

    return (

        <Link href={`/projects/${project.slug}`}>

            <div className="card">

                <h3 style={{fontSize:"20px", marginBottom:"10px"}}>
                    {project.title}
                </h3>

                <p style={{
                    color:"#94a3b8",
                    marginBottom:"20px",
                    lineHeight:"1.6"
                }}>
                    {project.description}
                </p>

                <div style={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"8px"
                }}>

                    {project.stack.map((tech)=>(
                        <span key={tech} className="tag">
              {tech}
            </span>
                    ))}

                </div>

            </div>

        </Link>

    )

}