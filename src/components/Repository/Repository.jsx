import React from 'react'
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import { formatDistance } from 'date-fns'

import RepositiryItem from '../RepositoryList/RpositoryItem';
import useRepository from '../../hooks/useRepository';
import { Card, CardHeader, Pressable} from '../UI';

export const RepositiryItemWithLink = ({item, onPress}) => {
  return (
    <RepositiryItem
      item={item}
    >
      <Pressable text='Open on GitHub' onPress={onPress} />
    </RepositiryItem>
  );
}

const Review = ({review}) => {
  return (
    <Card>
      <CardHeader 
        title={review.user.username}
        avatarShorttext={review.rating}
        subHeader={review.createdAt}
        text={review.text}
      />
    </Card>
  );
}

const Repository = () => {

  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  const handlePress = () => {
    Linking.openURL(repository.url)
  }

  const reviewNoder = repository 
    ? repository.reviews.edges.map(edge => ({...edge.node, createdAt: formatDistance(new Date(edge.node.createdAt), new Date(), {addSuffix: true})}))
    : [];

  const renderItem = ({item}) => {
    return <Review review={item}/>
  }

  if(loading){
    return null;
  }

  return (
    <FlatList 
      data={reviewNoder}
      keyExtractor={({id}) => id}
      ListHeaderComponent={<RepositiryItemWithLink item={repository} onPress={handlePress}/>}
      renderItem={renderItem}
    />
  );
}
export default Repository