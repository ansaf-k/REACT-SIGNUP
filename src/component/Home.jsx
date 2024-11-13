/* eslint-disable react/prop-types */


const Home = ({ setDisplay,setShowH }) => {
    const name = JSON.parse(localStorage.getItem('user'));

    const LogoutHandler = () => {
      localStorage.removeItem('user');
      setDisplay(false);
      setShowH(false);
    }
  return (
    <div>
        <h1>WELCOME {name.name}</h1>
        <button style={{color:'red'}} onClick={LogoutHandler}>Delete account</button>
    </div>
  )
}

export default Home