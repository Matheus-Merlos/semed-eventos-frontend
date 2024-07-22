import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Forms from "../Pages/Forms/Forms";
import Dashboards from "../Pages/Dashboards/Dashboards";

export default function AppRoutes() {

    return (

        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/forms" element={<Forms/>}/>
            <Route path="/dashboards" element={<Dashboards/>}/>
            </Routes>
        </Router>
        
    )
}