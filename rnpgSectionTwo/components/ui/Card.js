import {StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        // flexDirection:"row",   // Try uncommenting and getting the text alongside
        justifyContent:"center",  //veritcal axis
        alignItems:"center",      //horizontal axis
        borderRadius:8,
        marginHorizontal:24,
        marginTop: 36,
        padding:16,
        // backgroundColor:"#4d0000",
        // backgroundColor:"#4e0329",
        backgroundColor:Colors.primary800,
        elevation: 4, //droid only, use in liue of boxShadow which doesn't exist in RN
        //use shadow for iOS
        shadowColor: "black",
        shadowOffset:{width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})
