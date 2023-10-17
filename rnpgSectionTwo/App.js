import {useState} from 'react'
import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    //Set the state for whether there is a number present
    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber){
        //Takes the chosen number and sets it to state
        setUserNumber(pickedNumber)
    }

    /* The current screen should start as the StartGameScreen */
    let currentScreen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    /* When a number is selected and passes validation, screen becomes the GameScreen*/
    if (userNumber) {
        currentScreen = <GameScreen/>
    }

    return (
      <LinearGradient
          colors={["#4e0329","orange"]}
          style={styles.rootScreen}>
          <ImageBackground
              source={require("./assets/images/background.jpg")}
              resizeMode="cover"
              style={styles.rootScreen}
              imageStyle={styles.backgroundImage}
          >
              {/*Display screen from above*/}
              {currentScreen}
          </ImageBackground>
      </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
   // opacity: 0.4
   opacity: 0.3
  }
});
