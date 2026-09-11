import { router } from "expo-router";
import { Text,View } from "react-native";
import { Card,Screen,Title,Button,Badge,C } from "../../src/ui";
import { useStore } from "../../src/store";
export default function Dashboard(){
 const {sites}=useStore(); const critical=sites.filter(s=>s.priority==="CRITICAL").length; const high=sites.filter(s=>s.priority==="HIGH").length;
 return <Screen>
  <Text style={{fontSize:12,color:C.muted,fontWeight:"800",letterSpacing:1.5}}>AHMEDABAD MUNICIPAL GREEN NETWORK</Text>
  <Title>Green Coverage Network</Title><Text style={{color:C.muted}}>Offline-first field survey and green infrastructure planning.</Text>
  <View style={{flexDirection:"row",gap:10,marginTop:14}}>
   <Card style={{flex:1}}><Text style={{fontSize:26,fontWeight:"900"}}>{sites.length}</Text><Text style={{color:C.muted}}>Sites</Text></Card>
   <Card style={{flex:1}}><Text style={{fontSize:26,fontWeight:"900"}}>{critical}</Text><Text style={{color:C.critical}}>Critical</Text></Card>
   <Card style={{flex:1}}><Text style={{fontSize:26,fontWeight:"900"}}>{high}</Text><Text style={{color:C.high}}>High</Text></Card>
  </View>
  <Button onPress={()=>router.push("/survey/new")}>+ New Site Survey</Button>
  <Button secondary onPress={()=>router.push("/(tabs)/map")}>Open GIS Map</Button>
  <Card><Title small>Priority focus</Title>
   {sites.slice().sort((a,b)=>b.priorityScore-a.priorityScore).slice(0,4).map(s=><View key={s.id} style={{paddingVertical:9,borderBottomWidth:1,borderBottomColor:C.line}}>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text style={{fontWeight:"800",flex:1}}>{s.name}</Text><Badge level={s.priority}>{s.priority}</Badge></View>
    <Text style={{fontSize:12,color:C.muted,marginTop:3}}>{s.ward} · score {s.priorityScore}</Text>
   </View>)}
  </Card>
 </Screen>
}