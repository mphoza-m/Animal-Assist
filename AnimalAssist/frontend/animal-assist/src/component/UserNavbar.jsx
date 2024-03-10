import Icon from '../assets/icon.png'
import Profile from '../assets/profile.png'
import LogoutImage from '../assets/logout.png'

function UserNavbar(){
    return <div>
                <div>
            <nav className="navbar is-dark is-flex">
                <div className="navbar-brand">
                    <img src={Icon} alt="" height="10" width="70"/>
                    <a className="navbar-item is-size-3" href=''>
                        <h1 className="">Animal Assist</h1>
                    </a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href=''><h3>Strays</h3></a>
                    <a className="navbar-item" href=''><h3>Treatments</h3></a>
                    <a className="navbar-item" href=''><h3>Inventory</h3></a>
                    <a className="navbar-item" href=''><h3>Reports</h3></a>
                    <a className="navbar-item" href=''>
                        <figure className="image">
                            <img className="is-rounded" src={Profile} alt=""/>
                        </figure>
                    </a>
                    <a className="navbar-item" href=''>
                        <figure className="image">
                            <img className="is-rounded" src={LogoutImage} alt=""/>
                        </figure>
                    </a>
                </div>
            </nav>
        </div>
    </div>
}

export default UserNavbar;