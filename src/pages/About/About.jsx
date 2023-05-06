import { useState, useEffect } from "react"

function About(props) {
    const URL = props.URL
    const [about, setAbout] = useState(null)

    async function getAboutData() {
        // fetch(URL)
        fetch('./about.json')
            .then(response => response.json())
            .then(json => setAbout(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAboutData()
    }, [])

    function loaded() {
        return (
            <>
                <h1>About</h1>
                <div className="row">
                    <div className="col-12 col-xl-9 col-xxl-8">
                        <p>{about.bio}</p>
                    </div>
                </div>
                <h3>Skills</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-bg-secondary fw-bold">
                                Languages
                            </div>
                            <ul className="list-group list-group-flush">
                                {about.languages.map((l, idx) => (
                                    <li className="list-group-item" key={idx}>{l}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-bg-secondary fw-bold">
                                Frameworks and Libraries
                            </div>
                            <ul className="list-group list-group-flush">
                                {about.frameworks.map((f, idx) => (
                                    <li className="list-group-item" key={idx}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-bg-secondary fw-bold">
                                Databases
                            </div>
                            <ul className="list-group list-group-flush">
                                {about.databases.map((d, idx) => (
                                    <li className="list-group-item" key={idx}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-bg-secondary fw-bold">
                                Other
                            </div>
                            <ul className="list-group list-group-flush">
                                {about.other.map((o, idx) => (
                                    <li className="list-group-item" key={idx}>{o}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return about ? loaded() : <h1>Loading...</h1>
}

export default About