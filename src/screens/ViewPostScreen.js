import { useState, useEffect } from "react"
import styled from "styled-components/native";
import { axiosApi } from "../axiosApi";
import { View, Text, ImageBackground } from "react-native"
import { Card } from "../components/Card"
import Toast from "react-native-root-toast";
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle";


// @ts-ignore 
const backgroundImage=require(`../../assets/airplanes-pattern.webp`)

const initialPost={
  id:0,
  title:"",
  subtitle:"",
  content:"",
  created_at:"",
}

const Container= styled.View`
flex:1;
`;

const ImageBackgroundFullScreen= styled.ImageBackground`
flex:1;
`;

const Content=styled.Text`
font-size: 20px;
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

   return (
    <Container>
      <ImageBackgroundFullScreen source={backgroundImage} 
      resizeMode="cover"
        //width:"100%",
        //height:"50%",        
      >
     <ContainerCard>
       <Text>#{post.id}</Text>
       <Text>{postCreatedAt}</Text>
       <Title>{post.title}</Title>
       <Subtitle>{post.subtitle}</Subtitle>
       <Content>{post.content}</Content>
     </ContainerCard>
     </ImageBackgroundFullScreen>
     </Container>
   );
}