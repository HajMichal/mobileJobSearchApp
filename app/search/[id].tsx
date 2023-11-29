import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScreenHeaderBtn, Welcome, PopularJobs, NearbyJobs } from "../../components";
import { useFetch } from "../../hook/useFetch";

const Search = () => {
  const params = useGlobalSearchParams();

  const {
    data: searchedJobs,
    isLoading,
    error,
    refetch,
  } = useFetch({
    endpoint: `?search=${params.id}`,
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
          <NearbyJobs jobsData={searchedJobs} isLoading={isLoading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
