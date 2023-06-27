import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Toast from "react-native-root-toast";
import { axiosApi } from "../axiosApi";
import { TextField } from "../components/TextField";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import screens from "../screens.json"

const texts={
  submitButtonLabel: "Atualizar",
  updatePostSuccess: "O post foi atualizado com sucesso!",
}

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyle: {
    width: 220,
  },
});

export function EditPostScreen({navigation, route}) {
  const postId= route.params.id;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  async function loadPost (){
    const response = await axiosApi.get(`/notepads/${postId}`)
    const post = response.data;
    setTitle(post.title);
    setSubtitle(post.subtitle);
    setContent(post.content);
  }

  useEffect (()=> {
    const unsubscribe = navigation.addListener ('focus', ()=>{
      loadPost();
    });
    return unsubscribe
  } , [postId])

  async function onSubmit (){
    const response= await axiosApi.patch(`/notepads/${postId}`, {
      title, subtitle, content
    })
    Toast.show(texts.updatePostSuccess)
    navigation.goBack()
  }


  return (
    <Container>
      <TextField value={title} onChangeText={setTitle} />
      <TextField value={subtitle} onChangeText={setSubtitle} />
      <TextField value={content} onChangeText={setContent} />
      <View style={styles.containerButton}>
      <Button onPress={onSubmit} style={styles.buttonStyle}>{texts.submitButtonLabel}</Button>
      </View>
    </Container>
  );
}
