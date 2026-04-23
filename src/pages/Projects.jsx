import { Container } from "../components"
import { phase_1_projects } from "../constants/projects"

const Projects = () => {
    return (
        <Container>
            <h2 className="text-2xl font-bold text-center mt-50">Phase 1 Projects</h2>
            <div className="mt-15 mb-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phase_1_projects.map((project) => (
                    <div key={project.id} className="bg-card-bg p-4 rounded-2xl shadow hover:shadow-lg transition-all border border-card-border flex flex-col justify-between">
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img src={project.img} alt={project.name} />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <a href={project.path} target="_blank" className="bg-btn-bg text-btn-text px-6 py-2 rounded-2xl shadow hover:bg-btn-hover transition-all">Open Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Projects