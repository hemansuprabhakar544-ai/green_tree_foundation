import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StoreProvider } from "../src/store";

export default function Layout() {
  return <StoreProvider><StatusBar style="dark" /><Stack screenOptions={{headerShown:false}} /></StoreProvider>;
}