import { BrowserRouter, Route, Routes } from "react-router-dom"
import WebNavbar from "./components/NavBar/WebNavBar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"

const Router = () => {
    return (
        <BrowserRouter>
            <WebNavbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router