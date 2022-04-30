import { useMutation } from '@apollo/client'
import { REVIEW, DELETE_REVIEW } from '../graphql/mutations'


export const useInsertReview = () => {

  const [mutate, result] = useMutation(REVIEW);
  
  const submit = async (values) => {
    return await mutate({variables: {
      review: {
        ...values,
        rating: +values.rating
      }
    }});
  }

  return {
    submit,
    result: result,
  }

}

export const useRemoveReview = () => {

  const [remove, result] = useMutation(DELETE_REVIEW);

  const deleteRev = (id) => {
    return remove({variables: {
      deleteReviewId: id
    }});
  }

  return {    
    remove: deleteRev,
    result
  }
}


