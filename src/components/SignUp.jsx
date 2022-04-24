import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import { FormikTextInput, Pressable, Modal } from './UI';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  confirmation: ''
};

const testSize = (value, minLength = 1, maxLength = 30) => {
  if(value)
    return value.length >= minLength && value.length <= maxLength;
  return false;
};
function testConfirmPass(value, params){
  const pass = params.parent.password;
  return value === pass;
}

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .test({test: (value) => testSize(value), message: "Username length must be between 1 and 30"}),
  password: yup.string()
    .required('Password is required')
    .test({test: (value) => testSize(value, 5), message: "Password length must be between 5 and 30"}),
  confirmation: yup.string()
    .required('Confirmation password is required')
    .test({test: testConfirmPass, message: "Password confirmation must match the password"})
}) 

export const SignUpContainer = ({onSubmit}) => {
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
              <FormikTextInput secureTextEntry name="confirmation" placeholder="Password confirmation"/>
              <Pressable text='Sign in' onPress={handleSubmit}/>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

const SignUp = () => {

  const { submit } = useCreateUser();
  const { signIn } = useSignIn()
  const goTo = useNavigate();
  

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    try {
      await submit({username, password});
      await signIn({username, password});
      goTo('/');

    } catch (error) {
      console.log(error); 
    }
  };

  return <SignUpContainer onSubmit={onSubmit}/>
};

export default SignUp;