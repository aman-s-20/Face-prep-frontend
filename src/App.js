import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
function App() {

  const [userDetail, setUserDetail] = useState([]);
  const addUser = (newUser) => {
    
    console.log(newUser);
    setUserDetail((prevUser) => {
      return [...prevUser,newUser];
    })
  }

  const checkUser= (currentUser)=>{
    const result = userDetail.filter((currentUser)=>currentUser.username === userDetail.username);
    console.log(result);
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/logout' element={<h1>Logout</h1>} />
          </Route>
          <Route path='/login' element={<Login getUser={checkUser}/>} />
          <Route path='/signup' element={<Signup onAdd={addUser} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
