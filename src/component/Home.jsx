/* eslint-disable react/prop-types */


const Home = ({ isRegistered,setShowHome }) => {
    const name = JSON.parse(localStorage.getItem('user'));

    const logoutHandler = () => {
      localStorage.removeItem('user');
      isRegistered(false);
      setShowHome(false);
    }
  return (
    <div>
        <h1>WELCOME {name.name}</h1>
        <button style={{color:'red'}} onClick={logoutHandler}>Delete account</button>
    </div>
  )
}

export default Home