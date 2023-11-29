import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { type JobData } from "../hook/useFetch";
import NearbyJobsCard from "./cards/NearbyJobCard";

interface NearByJobs {
  isLoading?: boolean;
  jobsData: JobData[];
}

const NearbyJobs = ({ jobsData, isLoading = false }: NearByJobs) => {
  const router = useRouter();

  return (
    <View className="mt-4">
      <View className="flex flex-row items-center justify-between">
        <Text className="font-[OrkneyBold] text-2xl">Nearby jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 font-[OrkneyBold]">Show all</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View>
          {jobsData?.map((job: JobData) => (
            <NearbyJobsCard
              job={job}
              key={job.id}
              handleNavigate={() => router.push(`/job-details/${job.id}`)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default NearbyJobs;
