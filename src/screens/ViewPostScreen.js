import { useState, useEffect } from "react"
import styled from "styled-components/native";
import { axiosApi } from "../axiosApi";
import { View, Text, ImageBackground, StyleSheet, } from "react-native";
import { Card } from "../components/Card"
import Toast from "react-native-root-toast";
import screens from "../screens.json"
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle";
import { Button } from "../components/Button";
import { ListPostsScreen } from "./ListPostsScreen";


// @ts-ignore 
const backgroundImage=require(`../../assets/airplanes-pattern.webp`)

const texts ={
  deleteButtonLabel: "Deletar",
  editButtonLabel: "Editar",
  deleteSuccessMessage: "O post foi deletado com sucesso!",
  returnButton: "Voltar",
}
const styles = StyleSheet.create({
  containerBox: {
    flexDirection: "row",
    gap: 14,
    justifyContent: "center",
    marginTop: 8,
  },
  deleteBox: {
    backgroundColor: "#d63031",
  },
  editBox: {
    backgroundColor: "#fab1a0",
  },
  coordenadas: {
    color: "#808e9b",
  },
  containerInformation:{
    flexDirection: "row",
    justifyContent:"space-between",
  },
  
});

const initialPost={
  id:0,
  title:"",
  subtitle:"",
  content:"",
  created_at:"",
}

const Container= styled.ScrollView`
flex:1;
`;

const ImageBackgroundFullScreen= styled.ImageBackground`
flex:1;
`;

const Content=styled.Text`
font-size: 16px;
line-height: 24px;
text-align: justify;
`;

const ContainerCard=styled(Card)`
display:flex;
flex-direction:column;
gap:6px;
`;

export function ViewPostScreen({ navigation, route }){
const postId=route.params.id;
const[post, setPost]=useState(initialPost)
const postCreatedAt= new Date(post.created_at).toLocaleDateString();

useEffect(()=>{
  const unsubscribe=navigation.addListener('focus' , ()=>{
    loadPost()    
  })
  return unsubscribe

}, [postId])

async function loadPost(){
  const response= await axiosApi.get (`/notepads/${postId}`)
  setPost(response.data)
}

async function onReturn(){
  navigation.navigate(screens.listPosts)
}

async function onDelete() {
  const response= await axiosApi.delete (`/notepads/${postId}`)
  Toast.show(texts.deleteSuccessMessage)
  navigation.navigate(screens.listPosts)
}

async function onEdit() {
  navigation.navigate(screens.editPost, {
    id: postId,
  });
}

   return (
     <ImageBackgroundFullScreen
       source={backgroundImage}
       resizeMode="cover"
       //width:"100%",
       //height:"50%",
     >
       <Container>
         <ContainerCard>
           <View style={styles.containerInformation}>
            <View>
             <Text style={styles.coordenadas}>#{post.id}</Text>
             <Text>{postCreatedAt}</Text>
            </View> 
            <View>
               <Button onPress={onReturn}>{texts.returnButton}</Button>
            </View>
           </View>
           <Title>{post.title}</Title>
           <Subtitle>{post.subtitle}</Subtitle>
           <Content>{post.content}</Content>
           {post.latitude && post.longitude && (
             <>
               <Text style={styles.coordenadas}>Latitude: {post.latitude}</Text>
               <Text style={styles.coordenadas}>
                 Longitude: {post.longitude}
               </Text>
             </>
           )}
           <View style={styles.containerBox}>
             <Button style={styles.deleteBox} onPress={onDelete}>
               {texts.deleteButtonLabel}
             </Button>
             <Button style={styles.editBox} onPress={onEdit}>
               {texts.editButtonLabel}
             </Button>
           </View>
         </ContainerCard>
       </Container>
     </ImageBackgroundFullScreen>
   );
}