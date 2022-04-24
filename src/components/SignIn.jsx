import { Pressable, View, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native'

import { SubHeadingText, Text } from './Text';

import { FormikTextInput } from './Input';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  frame: {
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: "#FFF",
    alignSelf: 'center',
    margin: 50,
    maxWidth: 350,
    width: '80%',
    borderRadius: 5
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  presable: {
    alignSelf:'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: '100%'
  },
  presableText: {
    color: theme.colors.light,
    fontSize: 18,
    alignSelf: 'center'
  }
});

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
    <View style={styles.container}>

      <View style={styles.frame}>
        <SubHeadingText style={styles.title}>Sign in</SubHeadingText>
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
                <Pressable testID='btn-submit' onPress={handleSubmit} style={styles.presable}>
                  <Text fontWeight="bold" style={styles.presableText}>Sign in</Text>
                </Pressable>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

const SignIn = () => {

  const [signIn] = useSignIn();
  const goTo = useNavigate();

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    console.log(username);
    console.log(password);
    // TODO: Call signin to REST_API / GraphQL_API

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