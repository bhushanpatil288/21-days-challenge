import { Container } from "../components"
import { projects } from "../constants/projects"

const Projects = () => {
    return (
        <Container>
            <div className="min-h-screen flex items-center justify-center">
                {projects.map((project) => (
                    <a key={project.id} href={project.path} target="_blank" className="bg-lime-500 px-6 py-2 rounded-2xl shadow hover:bg-lime-600 transition-all">{project.name}</a>
                ))}
            </div>
        </Container>
    )
}

export default Projects