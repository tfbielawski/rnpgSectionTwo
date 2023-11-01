import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";


function InstructionText({children, style}){
    //in an array, styles are read left to right, so the styles on right can
    //override aspects of the styles on the left
    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.font500,
        fontSize: 18,
    },

});
