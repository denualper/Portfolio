import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {

    return (

        <div className="container">

            <h1 style={{
                fontSize:"36px",
                marginBottom:"40px"
            }}>
                Projects
            </h1>

            <div className="grid">

                {projects.map((project)=>(
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))}

            </div>

        </div>

    )

}