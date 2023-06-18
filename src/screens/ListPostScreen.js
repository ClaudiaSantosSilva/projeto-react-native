import { View, Text } from "react-native";
import { useEffect } from "react"

export function ListPostScreen({navigation, route}) {
  useEffect(()=>{
    const unsubscribe = navigation.addListener("focus" , ()=>{

    })

    return unsubscribe;
  } ,[])

  return (
    <View>
      <Text>ListPostScreen</Text>
    </View>
  );
}
