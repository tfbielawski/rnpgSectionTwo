import { TextInput,View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen(){
    return(
        <View style={styles.inputContainer}>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor:"cyan",
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
        color: "orange",
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
