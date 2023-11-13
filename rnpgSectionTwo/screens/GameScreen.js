import {View, StyleSheet, Alert, Text, FlatList, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import Colors from "../constants/colors";
import GuessLogItem from "../components/GuessLogItem";

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
      1,
      100,
      userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber){
      onGameOver(guessRounds.length);
    };
    //ALl vars, values, funcs used in the hook go in here as deps
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);


  function nextGuessHandler(direction){
    if ((direction === "lower" && currentGuess < userNumber )|| (direction === "greater" && currentGuess > userNumber)){
      Alert.alert("Don't lie.", "You know this is wrong.",[{text: "SORRY!", style: "CANCEL"},]);
      return;
    }
    if (direction === "lower"){
      maxBoundary = currentGuess;
    }
    else{
      minBoundary = currentGuess + 1; //Need +1? Test without and see what happens
    }
    console.log(minBoundary,maxBoundary)
    const newRndNumber =
        generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [ newRndNumber,...prevGuessRounds]);
  }

  const guessRoundsListLenth = guessRounds.length;

  let content = (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>Press higher (+) or lower (-) </InstructionText>
          <View style={styles.outerContainer}>
            <View style={styles.directionButtonsContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.directionButtonsContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color={Colors.font500} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
  );

  if (width > 500){
    content = (
        <>
          <InstructionText style={styles.instructionText}>Press higher (+) or lower (-) </InstructionText>
          <View style={styles.buttonsContainerWide}>
            <View style={styles.directionButtonsContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.directionButtonsContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color={Colors.font500} />
              </PrimaryButton>
            </View>
          </View>
        </>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Phoney's Guess</Title>
      {content}
      <Title>If Phoney guesses wrong, give him a hint!</Title>
       <View style={styles.listContainer}>
         {/*{guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)}*/}
         <FlatList
             data={guessRounds}
             renderItem={(itemData) =>
                 <GuessLogItem
                     roundNumber={guessRoundsListLenth - itemData.index}
                     guess={itemData.item}
                 />}
             keyExtractor={(item) => item}
         />
       </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 44,
    alignItems: "center"
  },
  buttonsContainerWide:{
    flexDirection:"row",
    alignItems: "center"
  },
  instructionText:{
    marginBottom: 12
  },
  outerContainer:{
    flexDirection:"row"
  },
  directionButtonsContainer:{
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
