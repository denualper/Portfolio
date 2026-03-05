import { projects } from "@/data/projects";
import ProjectContent from "@/components/ProjectContent";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="container">
                <h1>Project not found</h1>
                <p>{slug}</p>
            </div>
        );
    }

    return <ProjectContent project={project} />;
}