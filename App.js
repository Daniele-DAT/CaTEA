import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/componets/inicial';

export default function App() {
  return (
    <View style={styles.container}>

        <Inicio></Inicio>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    justifyContent: "center",
  },
});
