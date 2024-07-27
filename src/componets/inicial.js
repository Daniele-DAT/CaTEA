import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text>Eu sou:</Text>
      <Text>Profissional</Text>
      <Text>Perfil pessoal</Text>
      <Text>Criar conta</Text>
      <StatusBar style="auto" />
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
