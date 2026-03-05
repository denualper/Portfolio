import { Project } from "@/data/projects"

export default function ProjectContent({ project }: { project: Project }) {

    return (

        <div className="container" style={{maxWidth:"900px"}}>

            <h1 style={{fontSize:"40px", marginBottom:"20px"}}>
                {project.title}
            </h1>

            <p style={{color:"#94a3b8", marginBottom:"40px", fontSize:"18px"}}>
                {project.description}
            </p>

            <Section title="Overview">
                {project.overview}
            </Section>

            <Section title="Problem">
                {project.problem}
            </Section>

            <Section title="Solution">
                {project.solution}
            </Section>

            <Section title="System Architecture">
                {project.architecture}
            </Section>

            {project.diagram && (

                <pre style={{
                    background:"#020617",
                    padding:"20px",
                    borderRadius:"10px",
                    border:"1px solid #1e293b",
                    marginBottom:"40px",
                    overflowX:"auto"
                }}>
{project.diagram}
                </pre>

            )}

            <Section title="Key Technical Challenges">
                {project.challenges}
            </Section>

            <Section title="Results">
                {project.results}
            </Section>

            <h2 style={{marginBottom:"15px"}}>Tech Stack</h2>

            <div style={{
                display:"flex",
                gap:"10px",
                flexWrap:"wrap",
                marginBottom:"50px"
            }}>

                {project.stack.map((tech)=>(
                    <span
                        key={tech}
                        style={{
                            background:"#1e293b",
                            padding:"6px 12px",
                            borderRadius:"6px",
                            fontSize:"14px"
                        }}
                    >
                        {tech}
                    </span>
                ))}

            </div>

        </div>

    )
}

function Section({ title, children }:{ title:string, children:React.ReactNode }){

    return(

        <div style={{marginBottom:"35px"}}>

            <h2 style={{
                fontSize:"24px",
                marginBottom:"10px"
            }}>
                {title}
            </h2>

            <p style={{
                color:"#cbd5f5",
                lineHeight:"1.6"
            }}>
                {children}
            </p>

        </div>

    )
}