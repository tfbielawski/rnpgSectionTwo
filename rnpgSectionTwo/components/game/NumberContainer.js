import {Text, View, StyleSheet, Dimensions} from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container:{
        fontFamily: 'open-sans-bold',
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8, //not supported in Text, need View
        // padding: 24,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        // margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText:{
        fontFamily:'open-sans-bold',
        color: Colors.font500,
        fontSize: deviceWidth < 380 ? 28 : 66,
        // fontSize: 36,
        // fontWeight: "bold"
    },
})
