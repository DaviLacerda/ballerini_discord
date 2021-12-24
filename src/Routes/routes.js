import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Error404 from "../Pages/Error404/Error404";

function RoutesFromSite() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<Home/>}></Route>
                <Route path='/error/404' element={<Error404/>}></Route>
            </Routes>
        </Router>
    )
}


export default RoutesFromSite;