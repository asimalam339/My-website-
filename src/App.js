import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent isSidebarOpen={isSidebarOpen} />
        </div>
    );
}

export default App;
