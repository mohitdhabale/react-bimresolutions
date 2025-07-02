import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navi from "./Navigation"
import Footer from "./footer.js"
import Contact from "./contact.js"
import About from "./about.js"
import {Service} from "./service.js"
import Home from "./home.js"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navi />
                <Routes>
                    <Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/contact" element={<Contact />} />

                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
} 