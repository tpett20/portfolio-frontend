import { useState, useEffect } from "react"
import './Projects.css'

function Projects(props) {
    const URL = props.URL
    const [projects, setProjects] = useState(null)

    async function getProjectsData() {
        // fetch(URL)
        fetch('./projects.json')
            .then(response => response.json())
            .then(json => setProjects(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProjectsData()
    }, [])

    function loaded() {
        return (
            <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
                {projects.map((project, idx) => (
                    <>
                        <div class="col">
                            <div class="card">
                                <img src={project.image} class="card-img-top" alt={`${project.name} Screenshot`}/>
                                    <div class="card-body">
                                        <h5 class="card-title">{project.name}</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <a href={project.live} class="card-link">Live Site</a>
                                        <a href={project.git} class="card-link">GitHub</a>
                                    </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects