import { Outlet } from "react-router";
import Navbar from "../../components/Navabr/Navbar";


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;