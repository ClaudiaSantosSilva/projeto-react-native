import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Toast from "react-native-root-toast";
import { axiosApi } from "../axiosApi";
import { useGlobalStore } from "../useGlobalStore";
import { TextField } from "../components/TextField";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import screens from "../screens.json"


const texts={
  submitButtonLabel: "Atualizar",
  updatePostSuccess: "O post foi atualizado com sucesso!",
  returnButtonLabel: "Voltar",
}

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  buttonStyle: {
    width: 220,
  },
});

export function EditPostScreen({navigation, route}) {
  const postId= route.params.id;
  const isLoading = useGlobalStore(state => state.isLoading);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isSubtitleFocused, setIsSubtitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  
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

  function onReturn() {
    navigation.goBack ();
  }

  return (
    <Container>
      <TextField
        isFocused={isTitleFocused}
        value={title}
        onChangeText={setTitle}
        onFocus={() => setIsTitleFocused(true)}
        onBlur={() => setIsTitleFocused(false)}
      />
      <TextField
        isFocused={isSubtitleFocused}
        value={subtitle}
        onChangeText={setSubtitle}
        onFocus={() => setIsSubtitleFocused(true)}
        onBlur={() => setIsSubtitleFocused(false)}
      />
      <TextField
        isFocused={isContentFocused}
        value={content}
        onChangeText={setContent}
        onFocus={() => setIsContentFocused(true)}
        onBlur={() => setIsContentFocused(false)}
      />
      <View style={styles.containerButton}>
        <Button
          isLoading={isLoading}
          onPress={onSubmit}
          style={styles.buttonStyle}
        >
          {texts.submitButtonLabel}
        </Button>
        <Button
          onPress={onReturn}
          style={styles.buttonStyle}
        >
          {texts.returnButtonLabel}
        </Button>
      </View>
    </Container>
  );
}
