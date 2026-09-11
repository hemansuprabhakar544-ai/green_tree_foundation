import { router } from "expo-router";
import { Pressable,Text,View } from "react-native";
import { useStore } from "../../src/store";
import { Badge,C,Input,Screen,Title,styles } from "../../src/ui";
import { useMemo,useState } from "react";
export default function Sites(){
 const {sites}=useStore(); const [q,setQ]=useState("");
 const list=useMemo(()=>sites.filter(s=>(s.name+" "+s.id+" "+s.ward+" "+s.address).toLowerCase().includes(q.toLowerCase())),[sites,q]);
 return <Screen><Title>Sites</Title><Text style={{color:C.muted}}>Survey records and intervention priorities.</Text><Input value={q} onChangeText={setQ} placeholder="Search sites, wards or IDs" style={{marginTop:12}}/>
 {list.map(s=><Pressable key={s.id} onPress={()=>router.push({pathname:"/site/[id]",params:{id:s.id}})} style={styles.card}>
  <View style={{flexDirection:"row",justifyContent:"space-between",gap:8}}><Text style={{fontSize:17,fontWeight:"800",flex:1}}>{s.name}</Text><Badge level={s.priority}>{s.priority}</Badge></View>
  <Text style={{color:C.muted,marginTop:5}}>{s.id} · {s.ward} · {s.zone}</Text><Text style={{marginTop:8}}>{s.intervention}</Text><Text style={{fontSize:12,color:C.muted,marginTop:3}}>Priority score {s.priorityScore}</Text>
 </Pressable>)}
 </Screen>
}