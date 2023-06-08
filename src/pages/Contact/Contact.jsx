import './Contact.css'
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
    function copyText() {
        navigator.clipboard.writeText("ThomasPettersen20@gmail.com")
        // Source: https://www.geeksforgeeks.org/how-to-create-copy-to-clipboard-button/
    }

    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9iv3gas', 'template_axim3i9', form.current, 'pMVHp8PTibMaHDygM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <h1 className="mb-3">📬 Contact</h1>
            <div className="mb-4 col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
                <h3>Email</h3>
                <div className="card text-center">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center text-break">
                            <h5 className="card-title mb-0">ThomasPettersen20@gmail.com</h5>
                            <button onClick={copyText} className="btn btn-sm btn-outline-secondary ms-2 d-none d-sm-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-11 col-lg-10 col-xl-8">
                <h3>Send a Message 📝</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-floating mb-3">
                        <input type="text" name="from_name" id="name" placeholder="First Last" className="form-control" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name="email" id="email" placeholder="email@address.com" className="form-control" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea name="message" id="message" className="form-control" placeholder="Type your message here" style={{ height: "100px" }} />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button className="btn btn-primary mb-3">Send</button>
                </form>
            </div>
        </>
    )
}