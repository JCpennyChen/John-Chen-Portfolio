import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "/src/css/5-bottom-contact-section/bottom-contact-section.css";

function BottomContactSecion() {
    return (
        <div id="bottom-contact-section" className="bottom-contact-section">
            {/* Message Box Section */}
            <div className="message-box">
                <h2>Send me a message!</h2>
                <p>Have a question or proposal, or just want to say hello? Go ahead.</p>
            </div>
            {/* Top Contact Section */}
            <div className="top-contact-section-container">
                <div className="input-container">
                    <input type="text" id="name-input" required />
                    <label htmlFor="name-input" className="label">Your Name</label>
                    <div className="underline"></div>
                </div>
                <div className="input-container">
                    <input type="text" id="email-input" required />
                    <label htmlFor="email-input" className="label">Email Address</label>
                    <div className="underline"></div>
                </div>
            </div>
            {/* Bottom Contact Section */}
            <div className="bottom-contact-section-container">
                <div className="input-container">
                    <input type="text" id="message-input" required />
                    <label htmlFor="message-input" className="label">Your Messages!</label>
                    <div className="underline"></div>
                </div>
            </div>
            {/* Soical Media Link Buttons */}
            <div className="social-media-links-containers">
                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <a href="https://www.facebook.com/profile.php?id=100005696492155" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <a href="https://www.instagram.com/john_ling_chen/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="icon github">
                        <span className="tooltip">GitHub</span>
                        <a href="https://github.com/JCpennyChen" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="icon linkedin">
                        <span className="tooltip">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/john-chen-365950233" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BottomContactSecion;
