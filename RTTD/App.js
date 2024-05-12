import { View } from 'react-native';
import Header from './components/Header';
import ListOfTasks from'./components/ListOfTasks';

export default function App() {
  return (
    <View>
      <Header />
      <ListOfTasks/>
    </View>
  );
}
