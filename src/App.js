import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =  (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=> {
          setAlert(null);
        },2000);
  }
  const toggleMode = (props)=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(19 18 20)';
      showAlert("Dark mode has been enabled", "success");
      // props.heading('white')
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // },2000 );
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // props.heading('black')
    }
  }
  
  return (
    <>
    
<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>


<div className='container my-3 '>
   </div>
    <BrowserRouter>
    {/* <About/> */}
      <Routes>
        <Route path='' element={<Textform heading="Put text here to analyze" mode={mode} showAlert={showAlert}/>}/>
       {/* <Route path='About' element={<About/>}/> */}
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
