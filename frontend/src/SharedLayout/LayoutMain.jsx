import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/MainNavbar";

export default function Index () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};