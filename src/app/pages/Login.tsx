import { LoginGoogle } from "../components/LoginGoogle/LoginGoogle";
import { LoginInner } from "../components/LoginInner/LoginInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        Login
        <LoginInner />
        <LoginGoogle />
      </form>
    </div>
  )
}

export default Login;