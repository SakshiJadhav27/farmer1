import React, {useState, useContext} from "react";
import "./wholesalerLogin.css";
import wholesaler1 from "../../../images/wholesale.png";
import { Link} from "react-router-dom";
import axios from 'axios';
import AuthContext from "../../../Context/AuthContext";
import Swal from 'sweetalert2'
import { Navbar } from "../../Navbar/navbar";
import { useNavigate } from 'react-router-dom';

const FarmerLogin = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const navigate = useNavigate();


  const {getLoggedIn} = useContext(AuthContext);

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

  var err_count = 0;

    function login(e) {
        e.preventDefault();


        if(password === undefined)
        {
            setPasswordError("Enter Password !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Password !'
              })
        }
        else {
            setPasswordError(undefined);
        }


        if(email === undefined)
        {
            setEmailError("Enter your Email address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Email id!'
              })
        }
        else{
            setEmailError(undefined);
        }

        
        if(err_count === 0)
        {
            render_data();
        }
    }

  async function render_data(){
    try {
        const loginData = {
            email, password
        };

        await axios.post("http://localhost:5000/wholeseller/login/", loginData); 
        await getLoggedIn();

        
       
        setTimeout(
            function() {
              navigate('/cart',{state:{ email : email }});
            },
            2000
        );

        Swal.fire({
            icon: 'success',
            title: 'Welcome !',
            text: 'Successfully Logged in',
            })

    } catch (err) {

        setEmailError("Incorrect Email or Password !")
        Toast.fire({
            icon: 'error',
            title: 'Incorrect Email or Password !'
          })    
    
        console.error(err);
    }
}

  return (
    <div>
      <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <Navbar/>
      </div>
    <div className="login-container">
      <div className="side-image">
        <img src={wholesaler1} alt="Side Image" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={login}>
          <label htmlFor="email">Email:<span className="required">*</span></label>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:<span className="required">*</span></label>
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
   
          <button type="submit">Login</button>
          <Link to="/wholesalerRegister">Don't have an account? Register here</Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FarmerLogin;
