import {Text, View, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380 ) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return(
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
                <Text style={styles.summaryText}> Your number was
                <Text style={styles.highlight}> {userNumber} </Text>
                <Text style={styles.highlight}> </Text> Phoney guessed it in
                <Text style={styles.highlight}> {roundNumber} tries</Text>. </Text>
            <PrimaryButton onPress={onStartNewGame}>START OVER</PrimaryButton>
        </View>
        </ScrollView>
    )
}
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    imageContainer: {
        // borderRadius:deviceWidth < 240 ? 150 : 2500,
        // width: deviceWidth < 480 ? 300 : 500,
        // height: deviceWidth < 480 ? 300 : 500,
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
