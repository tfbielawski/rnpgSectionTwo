import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
      <LinearGradient
          colors={["#4e0329","orange"]}
          style={styles.rootScreen}>
          <ImageBackground source={}>
              <StartGameScreen/>
          </ImageBackground>

      </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

  },
});
