import { View, Text, StyleSheet } from "react-native";

export const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{item.drink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
