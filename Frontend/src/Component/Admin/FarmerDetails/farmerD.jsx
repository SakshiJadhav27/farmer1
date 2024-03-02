import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./farmerD.css"
import { AdminNavbar } from '../../Navbar/navbar';

const FarmerDetails = () => {
  const [logins, setLogins] = useState([]);

  useEffect(() => {
    const fetchLogins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/farmer/farmerRegister');
        console.log('Request URL:', response.config.url); // Log the URL
        setLogins(response.data);
      } catch (error) {
        console.error('Error fetching login data:', error);
      }
    };

    fetchLogins();
  }, []);

  return (
    <>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <AdminNavbar/>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="table-container">
    <h2><center>Registered Farmers</center></h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>GovID</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {logins.map((login) => (
          <tr key={login._id}>
            <td>{login.name}</td>
            <td>{login.GovID}</td>
            <td>{login.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  );
};

export default FarmerDetails;
