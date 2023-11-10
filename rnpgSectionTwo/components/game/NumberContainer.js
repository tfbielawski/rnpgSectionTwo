import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer(props){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {props.children}
            </Text>
        </View>
    )
}
export default NumberContainer

const styles = StyleSheet.create({
    container:{
        fontFamily: 'open-sans-bold',
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8, //not supported in Text, need View
        padding: 24,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText:{
        fontFamily:'open-sans-bold',
        color: Colors.font500,
        fontSize: 36,
        // fontWeight: "bold"
    },
})
