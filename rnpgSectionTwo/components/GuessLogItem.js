import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemTest}>#{roundNumber}</Text>
            <Text style={styles.itemTest}>Phoney's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        width: "100%",
        marginVertical: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        backgroundColor: Colors.accent500
    },
    itemTest:{
         fontFamily: "open-sans"
     }
})
