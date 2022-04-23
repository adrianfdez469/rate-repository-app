import { useEffect} from 'react'
import { useNavigate } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';

const SignOut = () => {

  const signOut = useSignOut();
  const goTo = useNavigate();
  
  useEffect(() => {
    (async () => {
      await signOut();
      goTo('/');
    })();
  }, []);

  return null;

}
export default SignOut