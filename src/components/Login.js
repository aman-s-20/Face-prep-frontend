import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPasssword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.getUser({username,password});
        setUsername("");
        setPasssword("");
    }
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/home');
        }
    },)


    return <div className="signup">
        <h1>Login page</h1>
        <form className='signup-form'>
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
                    onChange={(e) => setPasssword(e.target.value)} />
            </div>


            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Login</button>

        </form>
    </div>
}

export default Login;