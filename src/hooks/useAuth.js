import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { selectAuth } from '../slice/authSlice';

const useAuth = () => {
    const auth0 = useAuth0();
    const auth = useSelector(selectAuth);

    return auth0.isAuthenticated === false ? auth : auth0;
};

export default useAuth;
