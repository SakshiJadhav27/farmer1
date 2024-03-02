// FarmerRegistration.js
import React, {useState, useContext} from 'react';
//import farmer3 from "../../../images/farmer_login.png";
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AdminNavbar } from '../Navbar/navbar';


const AdminRegistration = () => {
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordVarify, setPasswordVarify] = useState();
    const [name, setName] = useState();

    var err_count = 0;

    const {getLoggedIn} = useContext(AuthContext)

    //function for toast message
    const Toast = Swal.mixin({
        toast: true,
        position: 'middle',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    function isName(nameValue){
        return /^[a-zA-Z ]{2,}$/.test(name);
    }

    function isEmail(emailValue){
        return /^[A-Za-z_.0-9]{3,}@+[a-z.]{4,7}[.]{1}[comin]{2,3}$/.test(email);
    }

    function isPass(pass){
        return /^[\w!@#$%^&*]{8,}$/.test(pass);
    }

    function isStrongestPass(pass){
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
    }
    
    function register(e){
        e.preventDefault();

        if(!isPass(password)) {
          
            err_count += 1;
        }
        else if(!isStrongestPass(password)){
            err_count += 1;
        }
        else if(passwordVarify === undefined)
        {
            err_count += 1;       
            Toast.fire({
                icon: 'error',
                title: 'Confirm your password !'
              })     
        }
        else if(password !== passwordVarify)
        {
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Both Passwords does not match !'
              })          
        }


        if(password === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Set password !'
              })
        }
        else if (!isPass(password)) 
        {
            err_count += 1;    
            Toast.fire({
                icon: 'error',
                title: 'Password shold be more than 8 characters !'
              })        
        }
        else if(!isStrongestPass(password))
        {
            err_count += 1;         
            Toast.fire({
                icon: 'error',
                title: 'Set strong password !'
              })   
        }


        if(email === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Email id !'
              })
        }
        else if(!isEmail(email))
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Invalid Email id !'
              })
        }


        if(name === undefined) {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Name !'
              })
        }
        else if(!isName(name)){
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Invalid Name !'
              })
        }
        

        if(err_count === 0)
        {
            save_data();
            setTimeout(
                function() {
                    document.location.href="/farmerLogin"
                },
                4000
            );
            
            Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Your Account is successfully created',
            })
        }
    }

    async function save_data(e){
        try{
            const registerData = {
                name,
                email, 
                password, 
                passwordVarify
            };

            await axios.post("http://localhost:5000/admin/register/", registerData);

        } catch(err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Admin Already Exixts',
                text: 'This email is taken by another account',
            })
        }
    }

  return (
    <div>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <AdminNavbar/>
    </div>
    <div className="registration-container">
      <div className="registration-form">
        <h2>Farmer Registration</h2>
        <form onSubmit={register}>
          <label>Full Name:<span className="required">*</span></label>
          <input 
            type="text" 
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:<span className="required">*</span></label>
          <input 
            type="Email" 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:<span className="required">*</span></label>
          <input 
            type="text" 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:<span className="required">*</span></label>
          <input 
            type="text" 
            placeholder='Confirm Password'
            onChange={(e) => setPasswordVarify(e.target.value)}
          />

          <button type="submit">Register</button>
          <Link to="/adminLogin">Already have an account? Login here</Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AdminRegistration;
