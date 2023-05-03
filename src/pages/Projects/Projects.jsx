import { useState, useEffect } from "react"
import './Projects.css'

function Projects(props) {
    const URL = props.URL
    const [projects, setProjects] = useState(null)

    async function getProjectsData() {
        fetch(`${URL}/projects`)
            .then(response => response.json())
            .then(json => setProjects(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProjectsData()
    }, [])

    function loaded() {
        return projects.map((project, idx) => (
            <div className="Projects" key={idx}>
                <h1>{project.name}</h1>
                <img src={project.image} alt={`${project.name} Screenshot`} />
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects