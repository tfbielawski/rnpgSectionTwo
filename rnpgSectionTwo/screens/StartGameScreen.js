import {useState} from "react"
import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props){
    const [enteredNumber, setEnteredNumber] = useState("");
    //RN auto passes enteredText into the func on change in text
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
        console.log("text happening -->>" + enteredText)
    }
    function resetInputHandler(){
        setEnteredNumber("");
    }
    function confirmInputHandler(){
        //parses string into an int
      const chosenNumber = parseInt(enteredNumber);
      if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
          Alert.alert(
              "Invalid Number",
              "Choose a number between 1 and 99 only",
              [{text: "OK", style:"destructive", onPress: resetInputHandler }]
          );
          return;
      }
        //pass chosenNumber into onPickNumber, which is passed by props back into App.js
        //where it is invokes pickedNumberHandler with chosenNumber
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title> GUESS MY NUMBER </Title>
            <Card>
                <InstructionText>Please Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: "center" //default is stretch, this overrides
    },
    numberInput:{
        height:50,
        width: 50,
        fontSize:32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.font500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer:{
        flexDirection:"row"
    },
    singleButtonContainer:{
        flex: 1 //forces buttons to fill
    },

});
