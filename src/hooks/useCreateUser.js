import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {

  const [ mutate, result ] = useMutation(CREATE_USER);

  const submit = async ({username, password}) => {
    return mutate({variables: { user: { username, password }}});
  }

  return {
    submit,
    result
  }

}
export default useCreateUser