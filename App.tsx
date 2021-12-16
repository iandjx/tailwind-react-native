import React from "react";
import { Text, View } from "react-native";
import tw from "./tailwind";

export default function App() {
  return (
    <View style={tw`p-4 android:pt-2 bg-litepie-primary flex-row`}>
      <Text style={tw`text-md tracking-wide`}>Hey there!</Text>
    </View>
  );
}
