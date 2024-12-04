import React from "react";
import "./Sidebar.css";
import { FaHeart, FaShareAlt, FaEye } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? "←" : "→"}
            </button>
            {isOpen && (
                <div className="sidebar-content">
                    <h1 className="sidebar-title">
                        MAITREYA BUDDHA <br></br>
                        IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
                    </h1>

                    {/* Icon Section */}
                    <div className="icon-container">
                        <div className="icon-wrapper">
                            <div className="icon-circle">
                                <FaHeart size={20} color="#333" />
                            </div>
                            <div className="icon-number">0</div>
                        </div>
                        <div className="icon-wrapper">
                            <div className="icon-circle">
                                <FaShareAlt size={20} color="#333" />
                            </div>
                            <div className="icon-number">120</div>
                        </div>
                        <div className="icon-wrapper">
                            <div className="icon-circle">
                                <FaEye size={20} color="#333" />
                            </div>
                            <div className="icon-number">27</div>
                        </div>
                    </div>

                    <ul className="sidebar-details">
                        <li><strong>Dynasty:</strong> Ahichchatra</li>
                        <li><strong>Period:</strong> 200 CE</li>
                        <li><strong>Material:</strong> Sandstone</li>
                        <li><strong>Location:</strong> National Museum</li>
                    </ul>

                    <div className="description-section">
                        <strong>Description:</strong>
                        <p>
                            Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting
                            to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven
                            historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha
                            will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva,
                            Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet.
                        </p>
                        <p className="read-more">→ READ MORE</p>
                    </div>

                    <div className="horizontal-buttons">
                        <button className="bottom-button orange-button">ADD TO COLLECTION</button>
                        <button className="bottom-button white-button">SOUVENIR</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
