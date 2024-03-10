import { Link } from 'react-router-dom';
import Icon from '../assets/icon.png'

function GuestNavbar(){
    return (<div>
                <div>
            <nav className="navbar is-dark is-flex">
                    <Link to="/">
                    <div className="navbar-brand">
                    <img src={Icon} alt="" height="10" width="70"/>
                        <h1 className="navbar-item is-size-3">Animal Assist</h1>
                    </div>
                    </Link>
                <div className="navbar-end">
                    <Link to="/register">
                        <button className="button is-primary mt-3 mr-3 is-rounded">Register</button>
                    </Link>
                    <Link to="/login">
                       <button className="button is-primary mt-3 mr-2 is-rounded">Login</button> 
                    </Link>
                </div>
            </nav>
        </div>
    </div>)
}

export default GuestNavbar;