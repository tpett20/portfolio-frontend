import { useState, useEffect } from "react"

function Projects(props) {
    const [projects, setProjects] = useState(null)

    async function getProjectsData() {
        fetch('./projects.json')
            .then(response => response.json())
            .then(json => setProjects(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProjectsData()
    }, [])

    function loaded() {
        return projects.map(project => (
            <div>
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