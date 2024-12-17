import "./Login.scss";

import EventiVicinoAMeLogo from "../../images/eventi-vicino-a-me-logo.png";

const Login = () => {
    return (
        <div className="login">
            <div className="login__container-content">
                <h2 className="h2">Benvenuto su <em>Eventi Vicino a Me +</em></h2>
                <h4 className="h4">Accedi per usufruire delle caratteristiche della versione +</h4>
                <img src={EventiVicinoAMeLogo} alt="Logo Eventi Vicino a Me, un'ape che vola" />
            </div>
            <form className="login__form">
                <div className="login__form-wrapper">
                    <div className="login__form-container-input">
                        <input className="login__form-input input-text" type="text" name="login-email" placeholder="Email*" />
                    </div>
                    <div className="login__form-container-input">
                        <input className="login__form-input input-text" type="password" name="login-password" placeholder="Password*" />
                    </div>
                    <div className="login__form-container-input">
                        <input className="input-submit" type="submit" name="login-submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;