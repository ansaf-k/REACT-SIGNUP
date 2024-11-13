import { useRef } from "react";
import '../app.css';

// eslint-disable-next-line react/prop-types
const Signup = ({setDisplay}) => {

    const Email = useRef('');
    const Password = useRef('');
    const Name = useRef('');

    const SignUphandler = (e) => {
        e.preventDefault();

        const newName = Name.current.value;
        const newPassword = Password.current.value;
        const newEmail = Email.current.value;
        console.log(newName);

        if(newName === "" || newPassword === "" || newEmail === ""){
            alert('please fill the field');
        }else{
        const user = { name: newName, email: newEmail, password: newPassword };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user)
        alert("Registration Successful.");
        Name.current.value = "";
        Email.current.value = "";
        Password.current.value = "";
        setDisplay(true);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={SignUphandler}>
                        <input type="text" placeholder="email" ref={Email} />
                        <input type="text" placeholder="username" ref={Name} />
                        <input type="password" placeholder="password" ref={Password} />
                        <button type="submit" >SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup