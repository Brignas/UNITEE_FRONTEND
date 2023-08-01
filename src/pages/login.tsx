import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Login() {

    const [IDNumber, setIDNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [userAccounts, setUserAccounts] = useState([]);
    const navigate = useNavigate();

    const handleIDNumber = (value) => {
        setIDNumber(value);
    } 

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleLogin = () => {
        const data = {
          User_ID : IDNumber,
          User_Password : Password
        };
    
        const url = "https://localhost:44374/api/Login/Login/";
        axios.post(url, data).then((result) => {
          if (result.status === 200) {
            if(result.data.message === "Successfully Login") {
              alert(result.data.message);
              switch(result.data.role) {
                case 'user':
                    alert('USER');
                  navigate(`/main/${result.data.id}`, { state: { userData: result.data } });
                  break;
                case 'supplier':
                    alert('SUPPLIER');
                  navigate(`/supplier_items/${result.data.id}`, { state: { supplierData: result.data } });
                  break;
                case 'admin':
                  alert('ADMIN');
                  break;
                default:
                  console.log('Unknown role');
                  break;
              }
            } else {
              alert(result.data.message); 
            }
          } else {
            alert('Network error or server not responding');
          }
        }).catch((error) => {
          alert(error);
        })
      }

    

    return (
        <div className='row container main-container'>
            <div className="col content-container" style={{ marginTop: '-200px' }}>
                <div className='row side-container'>
                    <h3 className='col-md-12 header-title'>New here?</h3>
                    <span className='col-md-12' style={{ textAlign: 'center' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                    </span>
                    <Link className='col-md-4 link' to='/register'>
                        <button className="col-md-12 btn btn-light button">SIGN UP</button>
                    </Link>
                </div>
            </div>
            <div className="col content-container">
                <div className='row login-container'>
                    <h3 className='col-md-12 header-title'>Log In</h3>
                    <input className="col-md-12 form-control input" placeholder="ID Number" value={IDNumber} onChange={(e) => handleIDNumber(e.target.value)} />
                    <input className="col-md-12 form-control input" type='password' placeholder="Password" value={Password} onChange={(e) => handlePassword(e.target.value)} />
                    <div className='col-md-12 link' style={{ padding: '0' }}>
                        <button className="col-md-12 btn btn-primary button" onClick={() => handleLogin()} >LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login