import { View, Text, TextInput } from "react-native";
import { Button } from "../components/Button";
import { useState } from "react";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";
import { axiosApi } from "../axiosApi";
import screens from "../screens.json"

const texts={
  titlePlaceholder: "Digite o título",
  subtitlePlaceholder: "Digite o subtítulo",
  contentPlaceholder: "Digite o conteúdo",
  submitSuccess: "Post criado com sucesso!",
}

const Container= styled.View`
margin: 14px;
gap: 16px;
`;

const TextField = styled.TextInput`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #0984e3;
`;

export function CreatePostScreen({navigation}) {
const [title, setTitle] = useState ("");
const [subtitle, setSubtitle] = useState("");
const [content, setContent] = useState("");

async function onSubmit (){
  const response = await axiosApi.post("/notepads",{
    title,
    subtitle,
    content,
  })

  Toast.show (texts.submitSuccess);
  navigation.navigate(screens.listPosts)
}

  return( 
    <Container>
      <TextField placeholder={texts.titlePlaceholder} onChangeText={setTitle} />
      <TextField placeholder= {texts.subtitlePlaceholder} onChangeText={setSubtitle} />
      <TextField placeholder = {texts.contentPlaceholder} multiline numberOfLines={4} onChangeText={setContent} />
      <Button onPress={onSubmit}>
        Enviar
      </Button>
    </Container>
  );
}

//const styles= StyleSheet.create({
  //textField:{
    //fontSize: 18,
    //lineHeight: 18,
  //}
//})
