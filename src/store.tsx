import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {DEMO_SITES, Site} from "./data";
const KEY="gcn-sites-v1";
type Ctx={sites:Site[]; addSite:(s:Site)=>Promise<void>; updateSite:(s:Site)=>Promise<void>; resetDemo:()=>Promise<void>};
const Store=createContext<Ctx|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [sites,setSites]=useState<Site[]>(DEMO_SITES);
 useEffect(()=>{AsyncStorage.getItem(KEY).then(v=>{if(v) setSites(JSON.parse(v));});},[]);
 const save=async(next:Site[])=>{setSites(next); await AsyncStorage.setItem(KEY,JSON.stringify(next));};
 const value=useMemo(()=>({sites,addSite:(s:Site)=>save([s,...sites]),updateSite:(s:Site)=>save(sites.map(x=>x.id===s.id?s:x)),resetDemo:()=>save(DEMO_SITES)}),[sites]);
 return <Store.Provider value={value}>{children}</Store.Provider>;
}
export function useStore(){const v=useContext(Store); if(!v) throw new Error("StoreProvider missing"); return v;}