import {Text, View, StyleSheet, Alert} from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(
      // minBoundary, -> leads to range error when winning number is guessed
      // maxBoundary, -> leads to range error when winning number is guessed
      1,
      100,
      userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber){
      onGameOver();
    };
    //ALl vars, values, funcs used in the hook go in here as deps
  }, [currentGuess, userNumber, onGameOver]);


  function nextGuessHandler(direction){
    if ((direction === 'lower' && currentGuess < userNumber )|| (direction === 'greater' && currentGuess > userNumber)){
      Alert.alert("Don't lie.", "You know this is wrong.",[{text: "SORRY!", style: "CANCEL"},]);
      return;
    }
    if (direction ==='lower'){
      maxBoundary = currentGuess;
    }
    else{
      minBoundary = currentGuess + 1; //Need +1? Test without and see what happens
    }
    console.log(minBoundary,maxBoundary)
    const newRndNumber =  generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 44,
  },
});
