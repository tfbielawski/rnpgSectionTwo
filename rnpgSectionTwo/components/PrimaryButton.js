import { Text, View, Pressable, StyleSheet  } from "react-native";

//Instead of passing in props, and then using props.children, we destructure it
function PrimaryButton({children}) {
    function pressHandler(){
        console.log("PRESSED IT")
    }
  return (
      <View style={styles.buttonOuterContainer}>
         <Pressable
         style={({pressed})=>
             pressed
             ? [styles.buttonInnerContainer, styles.iosPressed]
             : styles.buttonInnerContainer
         }
         onPress={pressHandler}
         android_ripple={{color:"red"}}
         >
             <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
  )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin: 4, //all directions
        overflow: "hidden", //hides ripples that try to appear outside the container
    },
    buttonInnerContainer: {
        // backgroundColor:"silver",
        backgroundColor:"ffb84d",
        paddingVertical: 8, //equal top and bottom
        paddingHorizontal: 16, //equal  left and right
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    iosPressed:{
        opacity: 0.75, //value 0-1 which represents a %-age
    }
});
