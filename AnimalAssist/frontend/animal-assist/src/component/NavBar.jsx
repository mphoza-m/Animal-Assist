import '../index.css'
import Icon from '../assets/icon.png'
import Profile from '../assets/profile.png'
import LogoutImage from '../assets/logout.png'
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar'
function NavBar(){

    const isLoggedIn = false;

    if(isLoggedIn){
        return  <UserNavbar/>
    }else{
        return <GuestNavbar/>
    }
}

export default NavBar