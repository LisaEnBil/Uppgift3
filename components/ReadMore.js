import { View, Text, StyleSheet } from "react-native";

export const ReadMore = ({ navigation, route }) => {
  return (
    <View style={readMoreStyles.container}>
      <Text style={readMoreStyles.text}>{route.params.drink.drink} </Text>
    </View>
  );
};

const readMoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});
