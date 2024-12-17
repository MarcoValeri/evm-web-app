import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import "./assets/scss/main.scss";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App;