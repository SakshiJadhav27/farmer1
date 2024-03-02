import React from "react";
import { AdminNavbar } from "../Navbar/navbar";
import FarmerDetails from "./FarmerDetails/farmerD";
const AdminHome=()=>{
    return(
        <>
        <AdminNavbar/>
        <FarmerDetails/>
        </>
    )
}
export default AdminHome;