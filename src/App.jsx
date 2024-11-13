import { useState } from 'react';
import './app.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';

const App = () => {

  const [isRegistered,setIsRegistered] = useState(false)
  const [showHome,setShowHome] = useState(false)

  return (
    <>
    {isRegistered ? (showHome ? <Home setIsRegistered={setIsRegistered} setShowHome={setShowHome}/> : <Login setShowHome={setShowHome}/> ) : <Signup setIsRegistered={setIsRegistered}/>}
    {}
    </>
  )
}

export default App