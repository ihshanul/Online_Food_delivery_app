import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { registerUser } from '../../service/authService';

const Register = () => {
  const navigate = useNavigate();
  const [data , setData] = useState({
    name: '',
    email : '',
    password: ''
  });
  const onChangeHandler = (event)=>{
    const name = event.target.name ;
    const value = event.target.value;
    setData(data => ({...data , [name]: value}) );
  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try {
      const response = await registerUser(data);
      if(response.status === 201 ){
        toast.success("Registration completed. please login.");
        navigate("/login")
      }else{
        toast.error("Unable to register... please try again");
      }
    } catch (error) {
      toast.error("Unable to register ... Please try again");
    }
  }


  return (
<div className="register-container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form onSubmit={onSubmitHandler}> 
              <div className="form-floating mb-3">
                 <input type="text" className="form-control" required id="floatingName" placeholder="Ihshan Halq"
                  name='name' onChange={onChangeHandler} value={data.name}
                 />
                 <label htmlFor="floatingName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" name='email' required onChange={onChangeHandler} value={data.email} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" name='password' required onChange={onChangeHandler} value={data.password} className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-outline-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  Up</button>
                  <button className="btn mt-2 btn-outline-danger btn-login text-uppercase fw-bold" type="reset">Reset
                  </button>
              </div>
              <div className="mt-4">
                Already have an account? <Link to='/login' >Sign in</Link>
              </div>
             
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default Register