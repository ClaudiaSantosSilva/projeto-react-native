import { View, Text } from "react-native";

export function EditPostScreen({navigation, route}) {
  const postId= route.params.id;

  return (
    <View>
      <Text>EditPostScreen {postId}</Text>
    </View>
  );
}
