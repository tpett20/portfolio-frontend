import { descriptionData as description, lessonsData as lessons } from "../../profileData/teaching"

function Teaching() {
    return (
        <>
            <h1 className="mb-3">🍎 Teaching</h1>
            <div className="row">
                <div className="col-12 col-l-11 col-xl-9">
                    <p>{description}</p>
                </div>
            </div>
            <h3>Lessons</h3>
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
                                {lesson.classPrompt ? (
                                    <a href={lesson.classPrompt} target="_blank" rel="noreferrer noopener" className="card-link">Class Prompt</a>
                                ) : <></>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Teaching