import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

/**
 * 
 * const searchImages = async (searchWord) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID CE4D7NGULiSobnigAKc-GDXFL04PdPkV9-BcNurld5o'
    },
        params: {
            query: searchWord
        }
        }
        )
    return response
}
 */

function RegisterPage(){
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        await axios.get("http://localhost:8080/api/v1/users").then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (<div>
        <form>
        <div>
            <NavBar/> 
        </div>
        <div className=" is-flex is-justify-content-center">
        <div className="card">
        <div className="is-flex is-flex-direction-row is-justify-content-center mt-5 mr-5 ml-5 mb-3">
        <div className="columns is-flex is-flex-direction-column">
                    <div className="is-flex is-justify-content-center">
                        <h1 className="is-size-3">Register</h1>
                    </div>
                    <div className="column">
                        <label htmlFor="firstname">Firstname</label>
                        <input className="input is-dark" type="text" placeholder="Email address"/>
                    </div>
                    <div className="column">
                        <label htmlFor="surname">Surname</label>
                        <input className="input is-dark" type="text" placeholder="Surname"/>
                    </div>
                    <div className="column">
                        <label htmlFor="contact">Contact No.</label>
                        <input className="input is-dark" type="text" placeholder="Contact no."/>
                    </div>
                    <div className="column">
                        <label htmlFor="email">Email</label>
                        <input className="input is-dark" type="text" placeholder="Email address"/>
                    </div>
                    <div className="column">
                        <label htmlFor="role">Role</label>
                        <br/>
                        <div className="select is-dark">
                            <select>
                            <option></option>
                            <option>Administrator</option>
                            <option>Animal Professional</option>
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <label htmlFor="Name">Password</label>
                        <input className="input is-dark" type="password" placeholder="Password"/>
                    </div>
                    <div className="column">
                        <button className="button is-dark is-fullwidth" type="submit" onClick={handleSubmit}>Register</button>
                        <p className="is-size-7 mt-3"> Already have an account? <Link to="/login" className="has-text-primary">Login</Link> </p>
                    </div>
                </div>
        </div>
        </div>
        </div>
        </form>
    </div>)
}

export default RegisterPage;