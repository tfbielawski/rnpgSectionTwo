import {Text, StyleSheet, Platform} from "react-native";
import Colors from "../../constants/colors";

//Instead of props > props.children
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily:"open-sans-bold",
    fontSize: 24,
    color: Colors.font500,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 3 : 1,
    borderWidth: Platform.select({android: 3, ios: 1}),
    // borderWidth: 1,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
