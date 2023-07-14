import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import FAQ from "./FAQ"
import Contact from "./Contact"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Main = () => {
  return (
    <Box>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="Contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
    </Box>
  )
}

export default Main