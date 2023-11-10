import {Text, View, Image, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text
                style={styles.summaryText}> Phoney solved the game in
                <Text style={styles.highlight}> {roundNumber} </Text>tries.
                <Text style={styles.highlight}> </Text> Your number was
                <Text style={styles.highlight}> {userNumber} </Text>. </Text>
            <PrimaryButton onPress={onStartNewGame}>START OVER</PrimaryButton>
        </View>
    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 150, //when this is half of ht / wd, we get a circle
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: "hidden", //hides the rectanglur nature of the image
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontSize:24,
        color: colors.primary500,
        fontFamily: 'open-sans',
        textAlign: "center",
        margin: 24
    },
    highlight:{
      fontFamily: 'open-sans-bold',
      color: colors.font500,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    }
})
