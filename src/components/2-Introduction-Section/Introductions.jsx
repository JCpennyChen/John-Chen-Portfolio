import React from "react";
import "/src/css/2-introduction-section/introduction.css";

function Introduction() {
    return (
        <div className="introduction-container">
            <div className="autobiography">
                <h1>Hello! I'm John Chen</h1>
                <p>
                    I am a senior at the University of Utah, pursuing a Bachelor of Science in Computer Science with minors in Mathematics and Robotics. I am expected to graduate in Spring 2026. I am deeply passionate about developing new technology within the field of robotics, as well as designing innovative software applications.
                </p>
                <p>
                    Throughout my studies, I have developed expertise in a range of programming languages and frameworks, including HTML, CSS, React, JavaScript, Python, PyTorch, Java, and C++. I am also currently becoming familiar with R, Pandas, PennyLane, and SQL. These skills have empowered me to work on interdisciplinary projects.
                </p>
                <p>
                    When I am not immersed in programming or technology, I spend time working on my own clothing shop, playing the piano, and absolutely grinding my tennis forehand. These hobbies reflect my detail-oriented nature and commitment to mastering new challenges.
                </p>
                <p>
                    Looking ahead, I am seeking a job environment that fosters technology growth, offers room for improvement, has a good leader who is easy to communicate with, and colleagues who are driven to develop innovative and groundbreaking solutions. Such an environment sparks my passion to strive for better and allows me to fully commit my enthusiasm to work.
                </p>
            </div>
            <div className="card-container">
                <div className="first-layer">
                    <div class="Whitivity"></div>
                    <div class="Selfie"></div>
                    <div class="Ogaboga"></div>
                </div>
                <div className="second-layer">
                    <div class="Dookiplex"></div>
                    <div class="SanFran"></div>
                </div>
                <div className="third-layer">
                    <div class="TriDog"></div>
                    <div class="Kakapo"></div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;