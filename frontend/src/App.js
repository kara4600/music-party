import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import JoinRoomPage from "./pages/JoinRoomPage";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/create' element={<JoinRoomPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;