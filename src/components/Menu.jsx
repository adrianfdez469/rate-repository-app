import React from 'react'
import { useLocation } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

import { AppBar } from './UI'

const Menu = () => {
  const location = useLocation();
  const { data } = useQuery(ME);

  return (
    <AppBar location={location} isLogin={!!data?.me}/>
  );
}

export default Menu