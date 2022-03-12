// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // Whtether the mode is light or dark
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#071018';
      showAlert("Dark mode has been enabled","success");
      // document.title="textUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","succes");
      // document.title="textUtils - light Mode";
    }
  } 
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}> 
          </Route>
          <Route exact path="/" */}
          {/* element= {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>
    </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
