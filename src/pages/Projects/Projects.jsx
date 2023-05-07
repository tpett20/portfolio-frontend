import { useState, useEffect } from "react"
import './Projects.css'
import Loading from "../../components/Loading/Loading"

function Projects(props) {
    const URL = props.URL
    const [projects, setProjects] = useState(null)

    async function getProjectsData() {
        fetch(URL)
            .then(response => response.json())
            .then(json => setProjects(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProjectsData()
    }, [])

    function loaded() {
        return (
            <>
                <h1 className="mb-4">🏗️ Projects</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    {projects.map((project, idx) => (
                        <div className="col" key={idx}>
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt={`${project.name} Screenshot`}/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{project.name}</h5>
                                    <p className="card-text">{project.info}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="fw-semibold">Technologies:</span> {project.technologies}</li>
                                </ul>
                                <div className="card-body">
                                    <a href={project.live} target="_blank" rel="noreferrer noopener" className="card-link">Live Site</a>
                                    <a href={project.git} target="_blank" rel="noreferrer noopener" className="card-link">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return projects ? loaded() : <Loading/>
}

export default Projects