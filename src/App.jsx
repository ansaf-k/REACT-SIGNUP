import { useState } from 'react';
import './app.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';

const App = () => {

  const [display,setDisplay] = useState(false)
  const [showH,setShowH] = useState(false)

  return (
    <>
    {display ? (showH ? <Home setDisplay={setDisplay} setShowH={setShowH}/> : <Login setShowH={setShowH}/> ) : <Signup setDisplay={setDisplay}/>}
    {}
    </>
  )
}

export default App