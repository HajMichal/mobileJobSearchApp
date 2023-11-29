import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import { checkImageURL } from "../../utils";
import { type JobData } from "../../hook/useFetch";

interface PopularJobCardType {
  item: JobData;
  handleCardPress: (job_id: string) => void;
  selectedJob: string;
}
NativeWindStyleSheet.setOutput({
  default: "native",
});

const PopularJobCard = ({ item, selectedJob, handleCardPress }: PopularJobCardType) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item.id)} style={styles.conatiner}>
      <Text style={styles.header} numberOfLines={1}>
        {item.company_name}
      </Text>
      <TouchableOpacity onPress={() => handleCardPress(item.id)} style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: checkImageURL(item.logo)
              ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          width={40}
          height={40}
          style={{ borderRadius: 10 }}
          alt="logo"
        />
      </TouchableOpacity>

      <View>
        <Text style={styles.jobTitle} numberOfLines={1}>
          {item.company_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 10,
  },
  header: {
    fontSize: 10,
    fontFamily: "OrkneyRegular",
    textAlign: "center",
    color: "#808080",
    maxWidth: 175,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  jobTitle: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 175,
  },
});

export default PopularJobCard;
