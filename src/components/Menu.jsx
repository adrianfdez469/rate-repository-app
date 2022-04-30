import React from 'react'
import { useLocation } from 'react-router-native';
import useMe from '../hooks/useMe';

import { AppBar } from './UI'

const repositoriesTab = {
  text: "Repositories",
  path: "/"
};
const signInTab = {
  text: "Sign in",
  path: "/signin"
};
const signOutTab = {
  text: "Sign out",
  path: "/signout"
};
const createReviewTab = {
  text: 'Create a review',
  path: '/createreview'
};
const signUpTab = {
  text: 'Sign up',
  path: '/signup'
}
const myReviewsTab = {
  text: 'My reviews',
  path: '/myreviews'

}

const Menu = () => {
  const location = useLocation();
  const { data } = useMe();

  const isLogin = !!data?.me;
  
  const tabs = data ? [
    repositoriesTab,
    
    ...(!isLogin ? [signInTab] : []),
    ...(!isLogin ? [signUpTab] : []),
    ...(isLogin ? [createReviewTab]: []),
    ...(isLogin ? [myReviewsTab]: []),
    ...(isLogin ? [signOutTab] : []),
  ] : [];

  return (
    <AppBar location={location} tabs={tabs}/>
  );
}

export default Menu