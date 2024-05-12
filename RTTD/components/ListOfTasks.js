import { useState } from 'react';
import { FlatList, StyleSheet, Text,View } from 'react-native';

export default function ListOfTasks() {
  const [Tasks, setTasks] = useState([
    {text:'закончить RTTD',index:0}
  ]);

  return (
    <View style={styles.container}>
      <FlatList
      data={Tasks}
      renderItem={({ item, index }) => (
        <Text>№{index} | {item.text}</Text>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }
  });