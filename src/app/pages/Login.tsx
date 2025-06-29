import { Link } from "react-router-dom";
import { LoginGoogle } from "../components/LoginGoogle/LoginGoogle";
import { LoginInner } from "../components/LoginInner/LoginInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Iniciar sesión</h2>
        <LoginInner />
        Iniciar sesión usando:
        <LoginGoogle />
        <div className="divider"/>
        <span className="auth-form-text">
          ¿Aún no tienes una cuenta? ¡Sign up here and get started with GustavoEduca today! <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;