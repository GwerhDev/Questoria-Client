import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../middlewares/redux/actions/auth';


const Auth = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(auth(navigate));
  }, [dispatch, navigate]);

  return (
    <div></div>
  );
};

export default Auth;