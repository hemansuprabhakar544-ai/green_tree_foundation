import { useState } from "react";
import { ActivityIndicator,Text,View } from "react-native";
import MapView,{Marker} from "react-native-maps";
import * as Location from "expo-location";
import { useStore } from "../../src/store";
import { C,Screen,Title,Button } from "../../src/ui";
const CENTER={latitude:23.0225,longitude:72.5714,latitudeDelta:.16,longitudeDelta:.16};
export default function MapScreen(){
 const {sites}=useStore(); const [loc,setLoc]=useState<Location.LocationObjectCoords|null>(null); const [loading,setLoading]=useState(false);
 async function locate(){setLoading(true);const {status}=await Location.requestForegroundPermissionsAsync();if(status==="granted"){const p=await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Balanced});setLoc(p.coords);}setLoading(false);}
 return <Screen scroll={false}><Title>GIS Map</Title><Text style={{color:C.muted,marginBottom:10}}>Survey sites across Ahmedabad.</Text><View style={{flex:1,minHeight:480,borderRadius:14,overflow:"hidden"}}><MapView style={{flex:1}} initialRegion={CENTER} showsUserLocation={!!loc}>{sites.filter(s=>s.latitude!=null&&s.longitude!=null).map(s=><Marker key={s.id} coordinate={{latitude:s.latitude!,longitude:s.longitude!}} title={s.name} description={`${s.priority} · ${s.intervention}`}/>)}</MapView></View><Button onPress={locate}>{loading?<ActivityIndicator color="#fff"/>:"Use current location"}</Button></Screen>
}