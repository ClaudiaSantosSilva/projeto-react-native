import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Container } from "../components/Container"
import { TextField } from "../components/TextField";
import { useState, useEffect } from "react";
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

const styles= StyleSheet.create({
      containerButton:{
        display:"flex",
        alignItems: "center",
      },
      buttonStyle:{
        width: 220,
      } 
  
})

export function CreatePostScreen({navigation, route}) {
const [title, setTitle] = useState ("");
const [subtitle, setSubtitle] = useState("");
const [content, setContent] = useState("");
const [coords, setCoords] = useState({ latitude:undefined, longitude:undefined });

const latitude = coords.latitude;
const longitude = coords.longitude;

async function onSubmit (){
  const response = await axiosApi.post("/notepads",{
    title,
    subtitle,
    content,
    latitude,
    longitude,
  })

  Toast.show (texts.submitSuccess);
  navigation.navigate(screens.listPosts)
}

function loadGeolocationParams() {
  const coords = route.params.coords ?? {};
  setCoords(coords);
}

useEffect(()=>{
  const unsubscribe = navigation.addListener('focus' , ()=>{
    loadGeolocationParams();
  })
  return unsubscribe;
},[route.params]);

  return (
    <Container>
      <TextField placeholder={texts.titlePlaceholder} onChangeText={setTitle} />
      <TextField
        placeholder={texts.subtitlePlaceholder}
        onChangeText={setSubtitle}
      />
      <TextField
        placeholder={texts.contentPlaceholder}
        multiline
        numberOfLines={4}
        onChangeText={setContent}
      />
      {latitude && <TextField value={latitude.toString()} editable={false} />}
      {longitude && <TextField value={longitude.toString()} editable={false} />}
      <View style={styles.containerButton}>
        <Button style={styles.buttonStyle} onPress={onSubmit}>
          Enviar
        </Button>
      </View>
    </Container>
  );
}

//const styles= StyleSheet.create({
  //textField:{
    //fontSize: 18,
    //lineHeight: 18,
  //}
//})
