import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(localStorage.getItem("user"));
    // eslint-disable-next-line
    useEffect(() => {
        setAuth(localStorage.getItem("user"));
    })
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return <div>
        {auth ?<ul className='nav-ul fixed-top'>
            <li><Link to='/home'>Home Page</Link></li>
            <li><Link to='/login' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
            </ul>:
            <ul className='nav-ul nav-right'>
                <li><Link to='/signup'>Sign up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
                
        }
      
    </div>
}

export default Navbar;