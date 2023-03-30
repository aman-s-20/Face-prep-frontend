import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Navbar = ()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return <div>
       <ul className='nav-ul'>
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/home'>Login</Link></li>
        <li>{auth?<Link to='/' onClick ={logout}>Logout</Link> :
        <Link to='/signup'>Sign up</Link>}</li>
       </ul>
    </div>
}

export default Navbar;