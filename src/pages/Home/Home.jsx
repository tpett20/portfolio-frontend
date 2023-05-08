import './Home.css'

function Home(props) {
    function downloadResume() {
        fetch('Thomas-Pettersen-Resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Thomas-Pettersen-Resume.pdf'
                alink.click()
            })
        // Source: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
    }

    return (
        <>
            <div className="row mt-lg-5">
                <div className="col-12 col-lg-4 col-xxl-5 text-center">
                    <img className="img-fluid rounded shadow-sm" src="https://i.imgur.com/ODgVb11.jpg" alt="Thomas Pettersen Headshot" />
                </div>
                <div className="col-12 col-lg-8 col-xxl-7 align-self-end text-end">
                    <h1 className="display-1">Thomas Pettersen</h1>
                    <h2 className="display-5">Software Engineer</h2>
                </div>
            </div>
            <div className='container'>
                <div className="row border border-secondary rounded shadow-sm justify-content-evenly mt-3 mt-lg-5 text-center">
                    <div className="col-4 col-lg-2 my-2">
                        <a href="https://github.com/tpett20" target="_blank" rel="noreferrer noopener" className="home-links btn">
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></p>
                            <p className='mb-0'>GitHub</p>
                        </a>
                    </div>
                    <div className="col-4 col-lg-2 my-2">
                        <a onClick={downloadResume} className="home-links btn">
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                            </svg></p>
                            <p className='mb-0'>Resume</p>
                        </a>
                    </div>
                    <div className="col-4 col-lg-2 my-2">
                        <a href="https://leetcode.com/tpett/" target="_blank" rel="noreferrer noopener" className="home-links btn">
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg></p>
                            <p className='mb-0'>LeetCode</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
