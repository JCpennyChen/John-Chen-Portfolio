import React, { useState } from "react";
import "/src/css/1-header-section/header.css";
import "/src/css/1-header-section/top-left-profile-image.css";
import "/src/css/1-header-section/theme-toggle-button.css";
import "/src/css/1-header-section/top-right-button-container.css";
import "/src/css/1-header-section/drop-down-menu.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleDropDownMenu = () => setOpen(!open);

    const [isDarkMode, setDarkMode] = useState(false);

    const lightDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <header className="top-header">
            <div className="left-section">
                {/* Top Left Corner Profile Section */}
                {renderProfileSection()}
                {/* Toggle Light Dark Theme mode */}
                {ToggleButton(lightDarkMode)}
            </div>
            {/* Top Right Corner Buttons Section */}
            {renderButtonsSection(toggleDropDownMenu, open)}
        </header>
    );
};

const renderProfileSection = () => {
    return (
        <div className="flip-container">
            <div className="profile-flip-container">
                <div className="front-profile-image">
                    <img src="public/photos/Profile-Image.png" alt="Front Profile" />
                </div>
                <div className="back-profile-image">
                    <img src="public/photos/JC.png" alt="Back Profile" />
                </div>
            </div>
        </div>
    );
};

const renderButtonsSection = (toggleDropDownMenu, open) => {
    return (
        <div className="buttons-container">
            {/* Navigation Buttons */}
            <NavItem targetId="about-section"><span>About</span></NavItem>
            <NavItem targetId="experience-section"><span>Experience</span></NavItem>
            <NavItem targetId="projects-section"><span>Projects</span></NavItem>
            <NavItem targetId="contact-section"><span>Contact Me</span></NavItem>
            {/* Burger Button */}
            <div className={`burger ${open ? "open" : ""}`} onClick={toggleDropDownMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Dropdown Menu */}
            {open && (
                <div className="dropDownMenu">
                </div>
            )}
        </div>
    );
};

function NavItem({ children, targetId }) {
    const scrollToSection = () => {
        if (targetId == "about-section") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (targetId == "contact-section") {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        } else if (targetId == "projects-section") {

        } else if (targetId == "experience-section") {

        }
    };
    return (
        <li className="nav-item" onClick={scrollToSection}>
            {children}
        </li>
    );
}

const ToggleButton = (lightDarkMode, isDarkMode) => {
    return (
        <div class="theme-switch">
            <input
                type="checkbox"
                id="theme-checkbox"
                checked={isDarkMode}
                onChange={lightDarkMode}
            />
            <label for="theme-checkbox">
                <div></div>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                        ></path>
                    </svg>
                </span>
            </label>
        </div>
    );
}

export default Header;