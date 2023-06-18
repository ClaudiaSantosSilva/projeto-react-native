import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CreatePostScreen } from "./src/screens/CreatePostScreen";
import { EditPostScreen } from "./src/screens/EditPostScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ListPostScreen } from "./src/screens/ListPostScreen";
import { ViewPostScreen } from "./src/screens/ViewPostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


const Drawer=createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerLabel:"Início",
          drawerIcon({ size, color}) {
            return <Ionicons name="home" size={size} color={color} />;
          }
        }} />
        <Drawer.Screen name="ListPost" component={ListPostScreen} options={{
          drawerLabel:"Listar posts",
          drawerIcon({size, color}) {
            return <FontAwesome5 name="list-alt" size={size} color={color} />;
          }
        }} />
        <Drawer.Screen name="ViewPost" component={ViewPostScreen} options={{
          drawerLabel:"Ver post",
          drawerIcon({size, color}) {
            return (
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={size}
                color={color}
              />
            );
          }
        }} />
        <Drawer.Screen name="EditPost" component={EditPostScreen} options={{
          drawerLabel:"Editar post",
          drawerIcon({size, color}){
            return (
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={size}
                color= {color}
              />
            );
          }
        }} />
        <Drawer.Screen name="CreatePost" component={CreatePostScreen} options={{
          drawerLabel:"Criar post",
          drawerIcon({size, color}){
            return <MaterialIcons name="post-add" size={size} color={color} />;
          }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}