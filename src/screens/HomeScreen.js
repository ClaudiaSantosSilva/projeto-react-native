import { View, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE, MapMarker } from "react-native-maps"
import * as Location from "expo-location"
import screens from "../screens.json"
import { useEffect, useState } from "react"
import { axiosApi } from "../axiosApi";

const coordsDelta= 0.05;

const initialCoords = {
  latitude: 0,
  longitude: 0,
};

const initialPostsList={
  count: 0,
  notepads: [],
};


export function HomeScreen({navigation}) {
const [coords, setCoords] = useState(initialCoords);
const [{ count, notepads }, setPostsList] = useState(initialPostsList);

const region = {
  ...coords,
  latitudeDelta: coordsDelta,
  longitudeDelta: coordsDelta,
};


const postsInMap = notepads.filter(
  (notepad) => notepad.latitude !== undefined && notepad.longitude !== undefined
);

async function loadPosts() {
  const response = await axiosApi.get("/notepads", {
    params: {
      limit: Infinity
    }
  });
  setPostsList(response.data);
}

  async function loadGeolocation(){
    const response = await Location.requestForegroundPermissionsAsync();
    const position= await Location.getCurrentPositionAsync ();
    setCoords(position.coords)
  }

  function onMarkerPress(notepad) {
    navigation.navigate(screens.viewPost, {id:notepad.id});
  }


useEffect(()=> {
  loadGeolocation();
  const unsubscribe = navigation.addListener("focus", () => {
    loadPosts();
  });

  return unsubscribe;
  
}, []);

const postsMarkers = postsInMap.map((notepad)=> (
  <MapMarker key={notepad.id} coordinate={notepad} 
  onPress={()=> onMarkerPress (notepad)} />
))

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        region={region}
        showsUserLocation
        style={{ width: "100%", height: "80%" }}
        provider={PROVIDER_GOOGLE}
        onLongPress={(event)=>{
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screens.createPost, { coords });
        }}
      >
        {postsMarkers}
      </MapView>
      <Text
        style={{
          fontSize: 18,
          color: "#3c40c6",
          marginTop: 16,
          marginHorizontal: 10,
          textAlign: "center",
        }}
      >
        Escolha uma marcação no mapa e leia sobre esse lugar ou selecione um
        ponto e adicione seus comentários.
      </Text>
    </View>
  );
}

