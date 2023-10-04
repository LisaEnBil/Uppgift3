import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { ListItem } from "./ListItem";

const drinks = [
  { drink: "Apelsinjuice" },
  { id: 2, drink: "Banansmoothie" },
  { id: 3, drink: "Cider" },
];

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={drinks}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Read more", { drink: item });
              }}
              style={homeScreenStyles.container}
            >
              <ListItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#0000fa",
  },
});
