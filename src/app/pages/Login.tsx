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
          ¿Aún no tienes una cuenta? ¡Regístrate hoy en Questoria! <Link to="/register">Registrarse</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;