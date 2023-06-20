import { FlatList } from "react-native";
import { useState, useEffect } from "react"
import { axiosApi } from "../axiosApi";
import { PostItem } from "../components/PostItem" 
import { Card } from "../components/Card"

const initialPostList={
  count:0,
  notepads:[],
}

export function ListPostScreen({navigation, route}) {
  const [postList, setPostList]= useState(initialPostList)

  async function loadPosts(){
    const response= await axiosApi.get("/notepads")
    setPostList(response.data)
  }

  function onPressPostItem(item){

  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener("focus", ()=>{
      loadPosts();
    })

    return unsubscribe;
  } ,[])

  return (
    
    <FlatList 
    data={postList.notepads} 
    renderItem={({ item })=> (
      <Card>
      <PostItem title={item.title} subtitle={item.subtitle} onPress={()=> onPressPostItem (item)} />
      </Card>
      )}
      />
    
  );
}
