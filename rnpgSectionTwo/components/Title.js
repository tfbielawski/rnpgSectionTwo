import { Text, StyleSheet } from "react-native";

//Instead of props > props.children
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "orange",
    padding: 12,
  },
});
