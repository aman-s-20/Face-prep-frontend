
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import Login from './components/Login';
// eslint-disable-next-line
import { useState, useEffect } from 'react';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("user"));


  const [userDetail, setUserDetail] = useState([]);
  const addUser = (newUser) => {
    setUserDetail((prevUser) => {
      return [...prevUser, newUser];
    })
  }


  const checkUser = (currentUser) => {

    const result = userDetail.find((user) =>
      user.username === currentUser.username);

    if (result && result.password === currentUser.password) {
      console.log(auth);
      console.log("Logged in successfully");
      setAuth(localStorage.setItem('user', JSON.stringify(result)));
    }
    else {
      alert("Invaid username or password.");
    }

  }




  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<Home size='5'/>} />
          </Route>
          <Route path='/login' element={<Login getUser={checkUser} />} />
          <Route path='/signup' element={<Signup onAdd={addUser} />} />
          <Route
            path="*"
            element={<Navigate to="/signup" />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
