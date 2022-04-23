import { useContext } from 'react'
import AuthStorageContext from '../contexts/AuthStoreageContext'

const useAuthStorage = () => {

  const authStorage = useContext(AuthStorageContext);

  return authStorage

}
export default useAuthStorage