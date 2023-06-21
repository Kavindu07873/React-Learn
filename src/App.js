// import logo from './logo.svg';
// import { Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import { Routes , Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import NotFound from './Pages/Home/NotFound';
import Countable from './Component/Home/Countable';
import Posts from './Component/Posts';


function App() {
  return (
    // <HomePage name ="Kavindu" age ="20" />

    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Countable' element={<Countable/>}/>
        <Route path='Posts' element={<Posts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
