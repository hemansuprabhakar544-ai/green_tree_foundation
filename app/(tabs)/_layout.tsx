import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { C } from "../../src/ui";
export default function TabsLayout(){
 return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:C.forest,tabBarInactiveTintColor:"#7b837d",tabBarStyle:{height:64,paddingBottom:8,paddingTop:5},tabBarLabelStyle:{fontSize:10,fontWeight:"700"}}}>
  <Tabs.Screen name="dashboard" options={{title:"Dashboard",tabBarIcon:({color,size})=><Ionicons name="grid-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="sites" options={{title:"Sites",tabBarIcon:({color,size})=><Ionicons name="leaf-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="map" options={{title:"Map",tabBarIcon:({color,size})=><Ionicons name="map-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="species" options={{title:"Species",tabBarIcon:({color,size})=><Ionicons name="flower-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="more" options={{title:"More",tabBarIcon:({color,size})=><Ionicons name="menu-outline" color={color} size={size}/>}}/>
 </Tabs>
}