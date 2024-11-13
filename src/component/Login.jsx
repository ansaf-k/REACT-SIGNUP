import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ setShowH }) => {

    const enteredEmail = useRef('');
    const enteredPassword = useRef('');



    const LoginHandler = (e) => {

        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        if (user &&
            user.email === enteredEmail.current.value &&
            user.password === enteredPassword.current.value
        ) {
            setShowH(true)

        } else {
            alert("please enter valid details")
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={LoginHandler}>
                        <input type="text" placeholder="username" ref={enteredEmail} />
                        <input type="password" placeholder="password" ref={enteredPassword} />
                        <button type="submit">login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login