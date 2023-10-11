import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../middlewares/redux/actions/auth';
import { setUserToken } from '../../middlewares/helpers';

const Auth = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const authToken = params.get('token');
  const currentUser = useSelector(state => state.currentUser);
  console.log(authToken);
  
  useEffect(() => {
    if (authToken) {
      setUserToken(authToken);
      dispatch(auth());
    }
  }, [dispatch, currentUser, authToken]);

  return (
    <div></div>
  )
}

export default Auth;