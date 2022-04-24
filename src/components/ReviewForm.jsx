import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useReview from '../hooks/useReview';

import { Modal, FormikTextInput, Pressable } from './UI'


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};
const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, "Rating must be grater or equal than 0")
    .max(100, "Rating must be lesser or equal than 100")
})



const ReviewFormContainer = ({onSubmit}) => {

  return (
   <Modal title="Create review">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({handleSubmit}) => {
          return (
            <>
              <FormikTextInput name="ownerName" placeholder="Repository owner name"/>
              <FormikTextInput name="repositoryName" placeholder="Repository name"/>
              <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
              <FormikTextInput name="text" multiline numberOfLines={3}/>
              <Pressable text='Submit' onPress={handleSubmit}/>
            </>
          );
        }}
      </Formik>
   </Modal>
  )
};

const ReviewForm = () => {

  const { submit } = useReview();
  const goTo = useNavigate();

  const onSubmit = async (values) => {
    const resp = await submit(values);

    goTo(`/repository/${resp.data.createReview.repositoryId}`);

  };

  return <ReviewFormContainer onSubmit={onSubmit} />
};

export default ReviewForm;