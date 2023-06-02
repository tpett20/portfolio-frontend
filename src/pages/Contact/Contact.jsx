export default function Contact() {
    function copyText() {
        navigator.clipboard.writeText("ThomasPettersen20@gmail.com")
        // Source: https://www.geeksforgeeks.org/how-to-create-copy-to-clipboard-button/
    }

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    Contact
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center text-break">
                        <h5 className="card-title mb-0">ThomasPettersen20@gmail.com</h5>
                        <button onClick={copyText} className="btn btn-sm btn-outline-secondary ms-2 d-none d-sm-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                                <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* <a href="#" className="btn btn-primary mt-3">Email</a> */}
                </div>
            </div>  
        </>
    )
}