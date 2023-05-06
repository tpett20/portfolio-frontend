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
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                {projects.map((project, idx) => (
                    <div className="col" key={idx}>
                        <div className="card">
                            <img src={project.image} className="card-img-top" alt={`${project.name} Screenshot`}/>
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href={project.live} className="card-link">Live Site</a>
                                    <a href={project.git} className="card-link">GitHub</a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects