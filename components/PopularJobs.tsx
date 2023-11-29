import React, { useState } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import PopularJobCard from "./cards/PopularJobCard";
import { useFetch, type JobData } from "../hook/useFetch";

const PopularJobs = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const router = useRouter();
  const { data, isLoading, error } = useFetch({
    endpoint: `?format=json&page=${pageNumber.toString()}`,
  });

  const handleCardPress = (job_id: string) => {
    router.push(`/job-details/${job_id}`);
    setSelectedJob(job_id);
  };

  return (
    <View className="mt-4">
      <View className="flex flex-row items-center justify-between">
        <Text className="font-[OrkneyBold] text-2xl">Popular jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 font-[OrkneyBold]">Show all</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item: JobData) => item.id}
            horizontal
            contentContainerStyle={{ columnGap: 14 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default PopularJobs;
