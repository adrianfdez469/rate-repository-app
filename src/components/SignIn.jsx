import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native'

import { FormikTextInput, Pressable, Modal } from './UI';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
}) 

export const SignInContainer = ({onSubmit}) => {
  return (
    <Modal title="Sign in">
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleSubmit}) => {
          return (
            <>
              <FormikTextInput name="username" placeholder="Username"/>
              <FormikTextInput secureTextEntry name="password" placeholder="Password"/>
              <Pressable text='Sign in' onPress={handleSubmit}/>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

const SignIn = () => {

  const { signIn } = useSignIn();
  const goTo = useNavigate();

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    try {
      const { data } = await signIn({username, password});
      console.log(data);
      goTo('/');

    } catch (error) {
      console.log(error); 
    }
  };

  return <SignInContainer onSubmit={onSubmit}/>
  
};

export default SignIn;