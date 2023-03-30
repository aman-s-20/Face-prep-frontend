import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route element={<PrivateRoute/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<h1>Login page</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        </Route>
        
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
