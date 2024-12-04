import React from "react";
import "./MainContent.css";
import bgimg from "../assets/bgimg.png";
import statueImage from "../assets/statue-image.png";

function MainContent({ isSidebarOpen }) {
    return (
        <div className={`main-content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
            <div className="image-container">
                {/* Background Image */}
                <img src={bgimg} alt="Background" className="background-image" />
                
                {/* Statue Image */}
                <img src={statueImage} alt="Statue" className="statue-image" />
            </div>
        </div>
    );
}

export default MainContent;
