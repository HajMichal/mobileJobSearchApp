import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { ScreenHeaderBtn } from "../../components";

import { NativeWindStyleSheet } from "nativewind";
import { useFetch } from "../../hook/useFetch";
import Company from "../../components/Company";
import JobTabs from "../../components/tabs/JobTabs";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // refetch();
    setRefreshing(false);
  }, []);

  const { eachJobData, isLoading, error } = useFetch({
    endpoint: `${params.id}/?format=json`,
  });
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#F7F7FF" },
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require("../../assets/icons/left.png")}
                  style={styles.imageLogo}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/share.png")}
                  style={styles.imageLogo}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          },
          title: "",
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <>
        <ScrollView style={{ flex: 1 }}>
          {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          {isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : !eachJobData ? (
            <Text>No data to display</Text>
          ) : (
            <View style={{ paddingBottom: 100 }}>
              <Company
                companyLogo={eachJobData.logo}
                comapnyName={eachJobData.company_name}
                numEployees={eachJobData?.company_num_employees}
                location={eachJobData.location}
                text={eachJobData.text}
                date_posted={eachJobData.date_posted}
                keywords={eachJobData.keywords}
                remote={eachJobData.remote}
                employment_type={eachJobData.employment_type}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
  },
  imageLogo: {
    width: 30,
    height: 30,
  },
});

export default JobDetails;
