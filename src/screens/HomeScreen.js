import { View, Text, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="Ver posts"
        onPress={() => {
          navigation.navigate("ListPost");
        }}
      />
      <Text>HomeScreen</Text>
      <FontAwesome name="plane" size={48} color="blue" />
    </View>
  );
}

