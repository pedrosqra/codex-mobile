import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  List,
  Title,
  Add,
  AddIcon,
  AddText,
  TasksIcon,
  TitleContainer,
  FilterIcon,
  Filter,
  Buttons,
} from './styles';
import Task from './components/Task';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5328ba',
    title: 'First Item',
  },
  {
    id: '3acafc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-96-145571e29d72',
    title: 'Third Item',
  },
];

function Home() {
  const navigation = useNavigation();

  function handleCreateTask() {
    navigation.navigate('Add');
  }

  return (
    <Container>
      <TitleContainer>
        <TasksIcon />
        <Title>Suas Tarefas</Title>
      </TitleContainer>
      <List
        data={DATA}
        renderItem={({item}) => <Task task={item} />}
        keyExtractor={item => item.id}
      />
      <Buttons>
        <Add onPress={handleCreateTask}>
          <AddIcon />
          <AddText>Adicionar</AddText>
        </Add>
        <Filter>
          <FilterIcon />
        </Filter>
      </Buttons>
    </Container>
  );
}

export default Home;
