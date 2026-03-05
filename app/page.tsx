import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="container">
                <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
                    Featured Projects
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "30px"
                }}>
                    {projects.map(p => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            </section>
        </>
    );
}