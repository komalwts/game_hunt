import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Appheader from './Header';
import Dashboard from './Dashboard';
import Slider from './Slider';

function App() {
  return (
    <div >
      {/* <ToastContainer theme='colored' position='top-center'></ToastContainer> */}
      <BrowserRouter>
      <Appheader></Appheader>
      <Slider></Slider>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;