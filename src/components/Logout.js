import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import "./Logout.css"

function Logout() {
    const dispatch = useDispatch();

    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(logout)
    }
    return (
        <div className="logout">
            <h1>Welcome <span className="user_name">&nbsp;Gyanendra</span></h1>
            <button className="logout_button" onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
