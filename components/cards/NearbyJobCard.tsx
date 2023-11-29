import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import { checkImageURL } from "../../utils";
import { type JobData } from "../../hook/useFetch";

interface NearByJobCardType {
  job: JobData;
  handleNavigate: () => void;
}

const NearbyJobsCard = ({ job, handleNavigate }: NearByJobCardType) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={handleNavigate}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: checkImageURL(job.logo)
              ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          width={60}
          height={60}
          style={{ borderRadius: 10 }}
          alt="logo"
        />
      </TouchableOpacity>
      <View style={styles.jobContent}>
        <Text style={styles.jobTitle} numberOfLines={1}>
          {job.company_name}
        </Text>

        <Text style={styles.header} numberOfLines={1}>
          {job.employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  header: {
    fontSize: 10,
    fontFamily: "OrkneyRegular",
    color: "#808080",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 7,
  },
  jobTitle: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 175,
  },
  jobContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default NearbyJobsCard;
