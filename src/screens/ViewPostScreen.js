import { useState, useEffect } from "react"
import styled from "styled-components/native";
import { axiosApi } from "../axiosApi";
import { View, Text } from "react-native"
import { Card } from "../components/Card"
import Toast from "react-native-root-toast";
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle";

const initialPost={
  id:0,
  title:"",
  subtitle:"",
  content:"",
  created_at:"",
}

const Content=styled.Text`
font-size: 20px;
line-height: 30px;
text-align: justify;
`;

const ContainerCard=styled(Card)`
display:flex;
flex-direction:column;
gap:4px;

`

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
     <ContainerCard>
       <Text>#{post.id}</Text>
       <Text>{postCreatedAt}</Text>
       <Title>{post.title}</Title>
       <Subtitle>{post.subtitle}</Subtitle>
       <Content>{post.content}</Content>
     </ContainerCard>
   );
}