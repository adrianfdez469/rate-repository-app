import { useMutation } from '@apollo/client'
import { REVIEW } from '../graphql/mutations'

const useReview = () => {

  const [mutate, result] = useMutation(REVIEW);
  

  const submit = async (values) => {
    console.log(values);
    return await mutate({variables: {
      review: {
        ...values,
        rating: +values.rating
      }
    }});
  }

  return {
    submit,
    result
  }

}
export default useReview;