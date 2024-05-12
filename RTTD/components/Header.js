import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Header() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >RTTD project</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor:'#7FFFD4',
  },
  text:{
    color:'#9400D3',
    alignSelf:'center',
    fontSize:50,
    padding:20
  }
});