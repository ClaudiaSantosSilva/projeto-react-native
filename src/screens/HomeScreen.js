import { View, Text, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MapView, {PROVIDER_GOOGLE, MapMarker } from "react-native-maps"
import * as Location from "expo-location"
import Toast from "react-native-root-toast"
import screens from "../screens.json"
import { useEffect, useState } from "react"
import { axiosApi } from "../axiosApi";

const coordsDelta= 0.05;

const initialCoords = {
  latitude: 0,
  longitude: 0,
};


export function HomeScreen({navigation}) {
const [coords, setCoords] = useState(initialCoords);
const region = {
  ...coords,
  latitudeDelta: coordsDelta,
  longitudeDelta: coordsDelta,
};

  async function loadGeolocation(){
    const response = await Location.requestForegroundPermissionsAsync();
    const position= await Location.getCurrentPositionAsync ();
    setCoords(position.coords)
     
  }


useEffect(()=> {
  loadGeolocation();
  
}, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        region= {region}
        showsUserLocation
        style={{ width: "100%", height: "80%" }}
        provider={PROVIDER_GOOGLE}
      />
      <Text
        style={{
          fontSize: 18,
          marginTop: 16,
          marginHorizontal: 10,
          textAlign: "center",
        }}
      >
        Escolha uma marcação no mapa e conheça mais um pouco sobre esse lugar ou
        selecione um ponto e adicione seus comentários.{" "}
      </Text>
    </View>
  );
}

