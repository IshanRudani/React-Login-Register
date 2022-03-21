import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import Login from './Login'

function Registration() {

    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");

    const [uname, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    function handleSubmit(e) {
        e.preventDefault();

        if(!fname || !lname|| !uname || !email || !password || !phone){
            setFlag(true);
        }else {
            setFlag(false);
            localStorage.setItem("Username", JSON.stringify(uname));
            localStorage.setItem("Password", JSON.stringify(password));

            localStorage.setItem("Firstname", JSON.stringify(fname));
            localStorage.setItem("Lastname", JSON.stringify(lname));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Phone", JSON.stringify(phone));
            
            console.log("Saved in local Storage");
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return(
        <div>
            {login? (

        <form className="form control" onSubmit={handleSubmit} action="">
            <div className="container">

            <h1>Register</h1>
            <div className="form-group row m-3">
                <label className="col" htmlFor="fname">First Name</label>
                <input type="text" minLength={6}  className="form-control col alphaonly" placeholder="Enter your first name"  onChange={(event)=> setFirstname(event.target.value)}/>
            </div>
            <div className="form-group row m-3">
                <label className="col" htmlFor="lname">Last Name</label>
                <input type="text" minLength={6} className="form-control col" placeholder="Enter your last name" onChange={(event)=> setLastname(event.target.value)}/>
            </div>
            <div className="form-group row m-3">
                <label className="col" htmlFor="uname">Username</label>
                <input type="text" minLength={6} className="form-control col" placeholder="Enter your name" onChange={(event)=> setUsername(event.target.value)}/>
            </div>
            <div className="form-group row m-3">
                <label className="col" htmlFor="password">Password</label>
                <input type="password" minLength={6} className="form-control col" placeholder="Enter your password" onChange={(event)=> setPassword(event.target.value)} />
            </div>
            <div className="form-group row m-3">
                <label className="col" htmlFor="email">Email</label>
                <input type="email" minLength={6} className="form-control col" placeholder="Enter your Email" onChange={(event)=> setEmail(event.target.value)} />
            </div>
            <div className="form-group row m-3">
                <label className="col" htmlFor="name">Mobile</label>
                <input type="phone" className="form-control col" placeholder="Enter your phone number" onChange={(event)=> setPhone(event.target.value)} />
            </div>
            </div>

            <button type="submit" className='btn btn-primary'> Register</button>

            <p onClick={handleClick}>Already Registered? {" "}  <span className="btn dark text-success fw-bold pe-auto">Login</span></p>

            {flag && (
                // <Alert color="primary" variant='danger'></Alert>
                    <div className="btn-danger container col-sm-4">Please fill all the fields</div>
                
            )}

        </form>
            
        ):(
        <Login/>
        )}
        </div>
                
    )
}

export default Registration