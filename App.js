import "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CreatePostScreen } from "./src/screens/CreatePostScreen";
import { EditPostScreen } from "./src/screens/EditPostScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ListPostsScreen } from "./src/screens/ListPostsScreen";
import { AddSimplePostScreen } from "./src/screens/AddSimplePostScreen";
import { ViewPostScreen } from "./src/screens/ViewPostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import screens from "./src/screens.json"

const texts = {
  homeLabel: "Início",
  viewPostLabel: "Ver post",
  listPostsLabel: "Listar posts",
  editPostLabel: "Editar post",
  createPostLabel: "Criar post",
  addSimplePostLabel:"Criar post simples",
};

const Drawer=createDrawerNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={screens.home}
          backBehavior="history"
        >
          <Drawer.Screen
            name={screens.home}
            component={HomeScreen}
            options={{
              headerTitle: texts.homeLabel,
              drawerLabel: texts.homeLabel,
              drawerIcon({ size, color }) {
                return <Ionicons name="home" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.listPosts}
            component={ListPostsScreen}
            options={{
              headerTitle: texts.listPostsLabel,
              drawerLabel: texts.listPostsLabel,
              drawerIcon({ size, color }) {
                return (
                  <FontAwesome5 name="list-alt" size={size} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.addSimplePost}
            component={AddSimplePostScreen}
            options={{
              headerTitle: texts.addSimplePostLabel,
              drawerLabel: texts.addSimplePostLabel,
              drawerIcon({ size, color }) {
                return (
                  <MaterialIcons name="post-add" size={size} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.viewPost}
            component={ViewPostScreen}
            options={{
              headerTitle: texts.viewPostLabel,
              drawerLabel: texts.viewPostLabel,
              drawerItemStyle: {
                height: 0,
              },
              drawerIcon({ size, color }) {
                return (
                  <MaterialCommunityIcons
                    name="text-box-search-outline"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.editPost}
            component={EditPostScreen}
            options={{
              headerTitle: texts.editPostLabel,
              drawerLabel: texts.editPostLabel,
              drawerItemStyle: {
                height: 0,
              },
              drawerIcon({ size, color }) {
                return (
                  <MaterialCommunityIcons
                    name="square-edit-outline"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.createPost}
            component={CreatePostScreen}
            options={{
              headerTitle: texts.createPostLabel,
              drawerLabel: texts.createPostLabel,
              drawerItemStyle: {
                height: 0,
              },
              drawerIcon({ size, color }) {
                return (
                  <MaterialIcons name="post-add" size={size} color={color} />
                );
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}