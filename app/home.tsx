import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from "../components";
import { NativeWindStyleSheet } from "nativewind";
import { useFetch } from "../hook/useFetch";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch({
    endpoint: `?format=json&page=${1}`,
  });

  return (
    <SafeAreaView className="bg-white h-screen font-[OrkneyRegular]">
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerRight: () => <ScreenHeaderBtn dimension="60" />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex p-3">
          <Welcome />
          <PopularJobs />
          <NearbyJobs jobsData={data} isLoading={isLoading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
