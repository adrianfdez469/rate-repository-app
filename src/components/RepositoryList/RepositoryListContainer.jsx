import { FlatList, TouchableOpacity } from 'react-native';
import RepositoryItem from './RpositoryItem';
import { Picker, TextInput } from '../UI';


const RenderItem = ({item, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
}

const RepositoryListContainer = ({repositories, handlePress, fetchFilter, filter, onPick, selectedValue, pickerOpts=[]}) => {

  /*const goTo = useNavigate();
  const location = useLocation();
  const [selectedValue, setSelectedValue] = useState();*/

  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => ({...edge.node}))
    : [];

    const renderItem = ({item}) => {

      return <RenderItem item={item} handlePress={() => handlePress(item)} />
    };
/*
  const pickerOpts = [
    {
      label: 'Latest repositories',
      value: sortValue.latest
    },
    {
      label: 'Highest rated repositories',
      value: sortValue.highest
    },
    {
      label: 'Lowest rated repositories',
      value: sortValue.lowest
    },
  ];

  const onPick = (itemValue) => {
    setSelectedValue(itemValue);
  }

  const renderItem = ({item}) => {
    const handlePress = () => {
      const path = `/repository/${item.id}`;
      if(location.pathname !== path){
        goTo(`/repository/${item.id}`);
      } 
    }

    return <RenderItem item={item} handlePress={handlePress} />
  };

  useEffect(() => {
    fetchSort(selectedValue);
  }, [selectedValue]);*/

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListHeaderComponent={
        <>
          <TextInput value={filter} onChange={({target}) => fetchFilter(target.value)} style={{margin:5}} placeholder="Search..."/>
          <Picker 
            options={pickerOpts}
            selectedValue={selectedValue}
            onValueChange={onPick}
            mode="dialog"
          />
        </>
      }
      onEndReached={() => {
        console.log('Fin')
      }}
      onEndReachedThreshold={0.5}
    />
  );
}

export default RepositoryListContainer;