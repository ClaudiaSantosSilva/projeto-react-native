import { View, Text, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MapView, {PROVIDER_GOOGLE, MapMarker } from "react-native-maps"
import * as Location from "expo-location"
import Toast from "react-native-root-toast"
import screens from "../screens.json"
import { useEffect } from "react"
import { axiosApi } from "../axiosApi";

const initialPostsList = {
  count: 0,
  notepads: [],
};


export function HomeScreen({navigation}) {
async function loadPosts() {
  const response = await axiosApi.get("/notepads", {
    params:{
      limit: Infinity
    }
  });
  setPostsList(response.data);
}

  async function loadGeolocation(){
  const response = await Location.requestForegroundPermissionsAsync();
  const position= await Location.getCurrentPositionAsync
     
  }

}

useEffect(()=> {
  loadGeolocation();
  const unsubscribe = navigation.addListener("focus", () => {
    loadPosts();
  });

  return unsubscribe;
}, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        
        showsUserLocation
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
      />
    </View>
  );
}

