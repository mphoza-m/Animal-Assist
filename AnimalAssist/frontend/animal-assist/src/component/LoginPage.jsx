import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import Swal from "sweetalert2";

function LoginPage(){

    const [emailAdress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginButtonClick = (event) => {
        event.preventDefault()
        if(emailAdress === "" || password === ""){
            Swal.fire("Error!", "Please ensure all fields are filled.", "error");
        }else{
            Swal.fire("Success!", 'Login successful.', 'success')
        }
    }
    const handleEmailAddressInput = event => {
        setEmailAddress(event.target.value)
    }
    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    return (<div className="is-flex-direction-column">
        <div>
            <NavBar/> 
        </div>

        <div className=" is-flex is-justify-content-center">
        <div className="card" style={{width: "50dvh", margin: "50px"}}>
            <div className="card-content">
            <div className="is-flex is-flex-direction-row is-justify-content-center">
            <div className="columns is-flex is-flex-direction-column">
                    <div className="column">
                        <label htmlFor={emailAdress}>Email</label>
                        <input className="input is-dark" type="text" placeholder="Email address" onChange={handleEmailAddressInput}/>
                    </div>
                    <div className="column">
                        <label htmlFor={password}>Password</label>
                        <input className="input is-dark" type="password" placeholder="Password" onChange={handlePasswordInput}/>
                        <a className="is-size-7 has-text-primary">forgot password?</a>
                    </div>
                    <div className="column">
                        <button className="button is-dark is-fullwidth" type="submit" onClick={handleLoginButtonClick}>Login</button>
                    </div>
                    <div className="column is-flex">
                        <p className="is-size-7"> Don't have an account?</p> <Link to="/register" className="has-text-primary is-size-7">Sign up</Link>
                    </div>
                </div>
        </div>
            </div>
        </div>
        </div>
    </div>)
}

export default LoginPage;