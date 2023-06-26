import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { axiosApi } from "../axiosApi";


export function EditPostScreen({navigation, route}) {
  const postId= route.params.id;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <View>
      <Text>EditPostScreen {postId}</Text>
    </View>
  );
}
