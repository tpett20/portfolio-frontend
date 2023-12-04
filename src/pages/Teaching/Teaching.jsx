function Teaching() {
    const lessons = [
        {
            name: "Guess the Magic Number",
            link: "https://scratch.mit.edu/projects/920755443",
            image: "https://i.imgur.com/u5XY6Jn.png",
            info: "Guess the Magic Number by clicking an option. The squirrel will tell you if it's higher or lower. Celebrate when you find it!",
            platform: "Scratch",
            concepts: "Conditional Statements, Random Numbers, For Loops, Clones"
        }
    ]

    return (
        <>
            <h1 className="mb-4">🍎 Teaching</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                {lessons.map((lesson, idx) => (
                    <div className="col" key={idx}>
                        <div className="card">
                            <a href={lesson.link} target="_blank" rel="noreferrer noopener" className="card-link">
                                <img src={lesson.image} className="card-img-top" alt={`${lesson.name} Screenshot`} />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{lesson.name}</h5>
                                <p className="card-text">{lesson.info}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="fw-semibold">Platform:</span> {lesson.platform}</li>
                                <li className="list-group-item"><span className="fw-semibold">Concepts:</span> {lesson.concepts}</li>
                            </ul>
                            <div className="card-body">
                                <a href={lesson.link} target="_blank" rel="noreferrer noopener" className="card-link">Link to Site</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Teaching