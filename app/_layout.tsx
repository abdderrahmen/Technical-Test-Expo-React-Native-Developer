import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../i18n";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1976D2" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Countries Explorer 🌍", 
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="country/[id]"
          options={{
            title: "Country Details",
            headerTitleAlign: "center",
          }}
        />
        </Stack>
      <StatusBar style="light" />
    </>
  );
}
