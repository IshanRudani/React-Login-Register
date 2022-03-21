import React from "react";
import { useState } from "react";
import Home from "./Home";

function Login() {

    const [usernamelog, setUsernamelog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let uname = localStorage.getItem("Username").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!usernamelog || !passwordlog) {
            setFlag(true);
            console.log("Empty");
        } else if(passwordlog !== pass || usernamelog !== uname){
            setFlag(true)
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return(
       <div>

           {home ? (
            <div className="container">
            <form onSubmit={handleLogin}>     
                <h1>Login</h1>   
            <div className="form-group row m-2">
                <label className="col" htmlFor="username">Username</label>
                <input type="text" className="form-control col" placeholder="Enter your username" onChange={(event)=> setUsernamelog(event.target.value)} />
            </div>
            <div className="form-group row m-2">
                <label className="col" htmlFor="password">Password</label>
                <input type="password" className="form-control col" placeholder="Enter your password" onChange={(event)=> setPasswordlog(event.target.value)} />
            </div>
            <button type="submit" className='btn btn-success'>Login</button>

            {flag && (
                <div className="btn-danger container col-sm-4 mt-2">Please enter correct Username or Password</div>
            )}
            </form>
            </div>
            ):(
                <Home/>
            )}
        </div>
    )
}

export default Login