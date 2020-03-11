import React, {useState}from 'react'
import './style.css'
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

    const [search, setSearch] = useState(false)

    const openSearch = () =>{
        setSearch(true);
    }

    const submitSearch = (event) =>{
        event.preventDefault();
        alert("Searched")
    }
    
    const navBarSearchClassName = search ? "navBarSearchInput active":"navBarSearchInput";
    return(
        <div className= "navBar">
            <ul>
                <li><NavLink to="/post/1">Posts</NavLink></li>
                <li><NavLink to="/aboutUs">About US</NavLink></li>
                <li><NavLink to="/contactUs">Contact Us</NavLink></li>

            </ul>
            <div className="navBarSearch">
                <form onSubmit= {submitSearch}>
                    <input type="text" className={navBarSearchClassName} placeholder="Search"/>
                    <img onClick={openSearch} className="navBarSearchIcon" src={require("../../assests/Icons/search.png")} alt="Search"/>
                </form>
            </div>
        </div>
    );
    
}

export default NavBar;