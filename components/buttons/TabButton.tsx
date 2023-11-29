import { View, Text } from "react-native";
import React from "react";
import { type JobData } from "../../hook/useFetch";

interface TabButtonType {
  name: string;
  activeTab: boolean;
}
export default function TabButton({ name, activeTab }: TabButtonType) {
  return (
    <View>
      <Text>TabButton</Text>
    </View>
  );
}
