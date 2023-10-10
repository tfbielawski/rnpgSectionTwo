import {useState} from "react"
import { TextInput,View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
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
        console.log("VALID NUMBER")
    }

    return (
        <View style={styles.inputContainer}>
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
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection:"row",   // Try uncommenting and getting the text alongside
        justifyContent:"center",  //veritcal axis
        alignItems:"center",      //horizontal axis
        borderRadius:8,
        marginHorizontal:24,
        marginTop:100,
        padding:16,
        // backgroundColor:"#4d0000",
        // backgroundColor:"#4e0329",
        backgroundColor:"#cc7a00",
        elevation: 4, //droid only, use in liueu of boxShadow which doesn't exist in RN
        //use shadow for iOS
        shadowColor: "black",
        shadowOffset:{width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput:{
        height:50,
        width: 50,
        fontSize:32,
        borderBottomColor:'lightorange',
        borderBottomWidth: 2,
        color: "#ffebcc",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer:{
        flexDirection:"row"
    },
    singleButtonContainer:{
        flex: 1 //forces buttons to fill
    }
});
