import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './wholesalerD.css'; // Import CSS file
import { AdminNavbar } from "../../Navbar/navbar";


const WholesalerDetails = () => {
  const [wholesalers, setWholesalers] = useState([]);

  useEffect(() => {
    const fetchWholesalers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/wholeseller/wholesalerRegister");
         // Assuming your route is /wholeseller for fetching wholesaler data
        setWholesalers(response.data);
      } catch (error) {
        console.error('Error fetching wholesaler data:', error);
      }
    };

    fetchWholesalers();
  }, []);

  return (
    <>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <AdminNavbar/>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="wholesaler-table-container">
      <h2><center>Wholesaler Data</center></h2>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {wholesalers.map((wholesaler) => (
            <tr key={wholesaler._id}>
              <td>{wholesaler.name}</td>
              <td>{wholesaler.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default WholesalerDetails;
