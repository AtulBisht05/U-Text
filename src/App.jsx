import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
//import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  
  const [mode, setMode] = useState('light'); //dark mode enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {

      setAlert(null)

    }, 1000);


  }

  // Mode change function
  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark')
      document.body.style.backgroundColor = "#2a2b30";
      showAlert("Dark Mode Activated", "success")

    }
    else {

      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Deactivated", "success")

    }
  }

  return (
    <>

    <Navbar title="U-Text" mode={mode} toggleMode={toggleMode} />
    <Alert exact alert={alert} />
    <Routes>
      <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="TRY U-text : Count Paragraphs | Sentences | Words| Characters & Convert Uppercase to Lowercase| Lower Case to Uppercase Remove Space | Copy Text" mode={mode} />}>

      </Route>
      <Route path="/about" element={<About />}>

      </Route>

      {/* <Route path="/contact" element={<Contact mode={mode} />}>

      </Route> */}
    </Routes>
    <Footer mode={mode} />


  </>
  )
}

export default App
