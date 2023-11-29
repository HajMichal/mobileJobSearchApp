import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useRouter } from "expo-router";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Welcome = () => {
  const [searchText, setSearchText] = useState("");
  const [activeJobType, setActiveJobType] = useState("");
  const jobTypes = ["Full time", "Part time", "Contractor"];
  const router = useRouter();

  return (
    <View className="">
      <View>
        <Text className="text-lg bg-transparent font-[OrkneyRegular]">Hello Michal</Text>
        <Text className="text-2xl font-[OrkneyRegular]">Find your perfect job</Text>
      </View>

      <View className="flex flex-row gap-2">
        <View className="w-[80%]">
          <TextInput
            className="bg-slate-100 border-0 blur-sm w-full p-3 pl-5 rounded-lg font-[OrkneyRegular]"
            onChangeText={(text) => {
              setSearchText(text);
            }}
            value={searchText}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity
          className="w-14 rounded-lg flex items-center justify-center bg-red-400"
          onPress={() => {
            router.push(`/search/${searchText}`);
            setSearchText("");
          }}
        >
          <Image
            source={require("../assets/icons/search.png")}
            className="w-9 h-9 "
            tintColor={"white"}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView className="flex flex-row w-screen mt-3">
        <FlatList
          data={jobTypes}
          renderItem={({ item }: { item: string }) => (
            <TouchableOpacity
              className="rounded-3xl border p-1 px-5 "
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
          // scrollEnabled={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
