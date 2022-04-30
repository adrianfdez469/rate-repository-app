import { FlatList, StyleSheet, View, Alert, Platform } from 'react-native';
import { formatDistance } from 'date-fns'
import * as Linking from 'expo-linking';

import useMe from '../../hooks/useMe';
import { Pressable, ReviewCard, theme} from '../UI';
import { useRemoveReview } from '../../hooks/useReview';

const reviewStyles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  deleteButton: {
    backgroundColor: theme.colors.danger
  }
});

const Review = ({review, viewRepo, deleteReview}) => {

  return (
    <ReviewCard 
      title={review.repository.fullName}
      avatarShorttext={review.rating}
      subHeader={review.createdAt}
      text={review.text}
    >
      <View style={reviewStyles.buttons}>
        <Pressable text='View repository' onPress={() => viewRepo(review.repository.url)} />
        <Pressable text='Delete review' onPress={() => deleteReview(review.id)} style={reviewStyles.deleteButton}/>
      </View>
    </ReviewCard>
  )
}

const Repository = () => {

  const { data, loading, fetchMore, refetch } = useMe(true);
  const { remove } = useRemoveReview();
  
  const reviewNodes = 
  data?.me?.reviews 
      ? data.me.reviews.edges.map(edge => ({
          ...edge.node,
          createdAt: formatDistance(new Date(edge.node.createdAt), new Date(), 
          {addSuffix: true})}))
      : [];

  const handleViewRepo = (url) => {
    Linking.openURL(url)
  }
    
  const handleRemove = (id) => {

    const removeReview = () => {
      remove(id).then(resp => {
        if(resp.data.deleteReview){
          refetch();
        }
      });
    }

    if(['android','ios'].includes(Platform.OS)){
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: removeReview }
        ],
        {cancelable: true}
      );
    }else{
      if(window.confirm("Are you sure you want to delete this review?")){
        removeReview();
      }

      
    }
  }

  const renderItem = ({item}) => {
    return <Review 
      review={item}
      viewRepo={handleViewRepo}
      deleteReview={handleRemove}
    />
  }

  const handleEndReached = () => {
    fetchMore();
  }

  if(loading){
    return null;
  }

  return (
    <FlatList 
      data={reviewNodes}
      keyExtractor={({id}) => id}
      renderItem={renderItem}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}
export default Repository