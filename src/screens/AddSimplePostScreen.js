import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { TextField } from "../components/TextField";
import { useState } from "react";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";
import { axiosApi } from "../axiosApi";
import screens from "../screens.json";

const texts = {
  titlePlaceholder: "Digite o título",
  subtitlePlaceholder: "Digite o subtítulo",
  contentPlaceholder: "Digite o conteúdo",
  submitSuccess: "Post criado com sucesso!",
};

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyle: {
    width: 220,
  },
});

export function AddSimplePostScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const clearInputs= () => {
    setTitle("");
    setSubtitle("");
    setContent("");
  };
 
  async function onSubmit() {
    const response = await axiosApi.post("/notepads", {
      title,
      subtitle,
      content,
      
    });

    Toast.show(texts.submitSuccess);
    clearInputs();
    navigation.navigate(screens.listPosts);
    }

  

  return (
    <Container>
      <TextField value={title} placeholder={texts.titlePlaceholder} onChangeText={setTitle} />
      <TextField
      value={subtitle}
        placeholder={texts.subtitlePlaceholder}
        onChangeText={setSubtitle}
      />
      <TextField
      value={content}
        placeholder={texts.contentPlaceholder}
        multiline
        numberOfLines={4}
        onChangeText={setContent}
      />
      <View style={styles.containerButton}>
        <Button style={styles.buttonStyle} onPress={onSubmit}>
          Enviar
        </Button>
      </View>
    </Container>
  );
}

