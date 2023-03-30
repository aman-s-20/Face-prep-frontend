import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPasssword] = useState("");
    const [userDetail,setUserDetail] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,username,password);
        setUserDetail(userDetail =>[...userDetail,{name,username,password}]);
        console.log(userDetail);
        localStorage.setItem("user",JSON.stringify({name,username,password}));
        setName("");
        setUsername("");
        setPasssword(""); 
        navigate('/')
    }

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/home');
        }
    },[])

    return (
        <div className="signup">
            <h1>Signup Page</h1>
            <form className='signup-form'>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" placeholder='Full name'
                             value={name}
                             onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                </div>

                {/* username */}
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" placeholder='Username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>

                {/* password */}
                <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" placeholder='Password' 
                    value={password}
                    onChange={(e) => setPasssword(e.target.value)}/>
                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>

            </form>

        </div>
    )
}

export default Signup;