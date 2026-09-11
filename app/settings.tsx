import { Text } from "react-native";
import { router } from "expo-router";
import { Button,Card,C,Screen,Title } from "../src/ui";
export default function Settings(){return <Screen><Title>Settings</Title><Card><Title small>App</Title><Text style={{color:C.muted}}>Green Coverage Network · Expo Android</Text><Text style={{marginTop:8}}>Offline survey data is stored locally on the device.</Text></Card><Button secondary onPress={()=>router.back()}>Back</Button></Screen>}