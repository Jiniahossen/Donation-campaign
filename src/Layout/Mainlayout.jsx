import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
           <div>
           <Navbar></Navbar>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;