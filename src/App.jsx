import React from "react";
import Header from "./components/1-Header-Section/Header.jsx";
import Introductions from "./components/2-Introduction-Section/Introductions.jsx";
import Experience from "./components/3-Experience-Section/Experience.jsx";
import Project from "./components/4-Project-Section/Project.jsx";
import BottomContactSecion from "./components/5-Bottom-Contact-Section/BottomContactSection.jsx"
import "./index.css";

function App() {
    return (
        <div>
            <Header />
            <Introductions />
            <Experience />
            <Project />
            <BottomContactSecion/>
        </div>
    );
}

export default App;