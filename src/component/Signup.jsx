import { useRef } from "react";
import '../app.css';

const Signup = ({isRegistered}) => {

    const email = useRef('');
    const password = useRef('');
    const name = useRef('');

    const SignUphandler = (e) => {
        e.preventDefault();

        const enteredName = name.current.value;
        const enteredPassword = password.current.value;
        const enteredEmail = email.current.value;
        console.log(enteredName);

        if(enteredName === "" || enteredPassword === "" || enteredEmail === ""){
            alert('please fill the field');
        }else{
        const user = { name: enteredName, email: enteredEmail, password: enteredPassword };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user)
        alert("Registration Successful.");
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
        isRegistered(true);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={SignUphandler}>
                        <input type="email" required placeholder="email" ref={email} />
                        <input type="text" required placeholder="username" ref={name} />
                        <input type="password" required placeholder="password" ref={password} />
                        <button type="submit" >SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup