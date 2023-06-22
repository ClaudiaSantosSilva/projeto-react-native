import { FlatList } from "react-native";
import { useState, useEffect } from "react"
import { axiosApi } from "../axiosApi";
import { PostItem } from "../components/PostItem" 
import { Card } from "../components/Card"
import Toast from "react-native-root-toast";
import screens from "../screens.json"

const initialPostsList={
  count:0,
  notepads:[],
}

export function ListPostsScreen({navigation, route}) {
  const [postsList, setPostsList]= useState(initialPostsList)


  useEffect(()=>{
    const unsubscribe = navigation.addListener("focus", ()=>{
      loadPosts();
    })

    return unsubscribe;
  } ,[])

async function loadPosts() {
  const response = await axiosApi.get("/notepads");
  setPostsList(response.data);
}

 function onPressPostItem({ id }) {
   navigation.navigate(screens.viewPost, {
     id,
   });
 }

  return (
    
    <FlatList 
    data={postsList.notepads} 
    renderItem={({ item })=> (
      <Card>
      <PostItem title={item.title} subtitle={item.subtitle} onPress={()=> onPressPostItem (item)} />
      </Card>
      )}
      />
    
  );
}
