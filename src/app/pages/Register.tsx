import { SignupGoogle } from "../components/SignupGoogle/SignupGoogle";
import { SignupInner } from "../components/SignupInner/SignupInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        Login
        <SignupInner />
        <SignupGoogle />
      </form>
    </div>
  )
}

export default Login;