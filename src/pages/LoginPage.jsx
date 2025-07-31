import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.account.logged);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login-inner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login, maybe redirect or update state
        console.log('Login successful');
        navigate('/');
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    if (logged) {
      return navigate('/');
    }
  }, [logged, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text-primary">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-gray-800 rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-white bg-gray-700 border border-gray-600 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-white bg-gray-700 border border-gray-600 rounded"
          required
        />
        <button type="submit" className="p-2 text-white rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          Login
        </button>
      </form>
      <a href="/login-google" className="flex items-center justify-center gap-2 p-2 mt-4 text-black bg-white rounded hover:bg-gray-200">
        <FontAwesomeIcon icon={faGoogle} />
        Login with Google
      </a>
    </div>
  );
};

export default LoginPage;