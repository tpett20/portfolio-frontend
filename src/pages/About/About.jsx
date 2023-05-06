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
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </>
        )
    }

    return about ? loaded() : <h1>Loading...</h1>
}

export default About