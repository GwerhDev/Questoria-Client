import { useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../middlewares/redux/actions/auth';
import { setUserToken } from '../../middlewares/helpers';

const Auth = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const authToken: string | any  = params.get('token');

  useEffect(() => {
    setUserToken(authToken);
    dispatch(auth(navigate));
  }, [dispatch, authToken, navigate]);

  return (
    <div></div>
  );
};

export default Auth;