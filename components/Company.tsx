import { View, Text, Image } from "react-native";
import React from "react";
import { checkImageURL } from "../utils";
import { StyleSheet } from "react-native";

export interface CompanyType {
  companyLogo: string;
  numEployees?: string;
  comapnyName: string;
  location: string;
  text: string;
  date_posted: string;
  keywords?: [];
  remote?: boolean;
  employment_type: string;
}

export default function Company({
  companyLogo,
  numEployees,
  comapnyName,
  location,
  remote,
  keywords,
  text,
  employment_type,
}: CompanyType) {
  const regex = /(<([^>]+)>)/gi;

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", justifyContent: "center", display: "flex", flexDirection: "row" }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: checkImageURL(companyLogo)
              ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={styles.headerTitle}>{comapnyName} </Text>
        <Text style={{ color: "#888888", textAlign: "center", width: "100%" }}>
          {employment_type ?? "contractor"} / {remote ? "remote" : "localy"}
        </Text>
        {numEployees && (
          <Text style={{ color: "#888888", textAlign: "center", width: "100%" }}>
            employees: {numEployees}
          </Text>
        )}
        {location && (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Image
              source={require("../assets/icons/location.png")}
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              alt="locationIcon"
            />
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              {location}
            </Text>
          </View>
        )}
        {keywords?.length !== 0 && (
          <View>
            <Text style={{ fontFamily: "OrkneyBold", marginTop: 15, fontSize: 18 }}>
              Requirements:
            </Text>
            {keywords?.map((requirement) => {
              return (
                <Text style={{ textAlign: "center" }} key={requirement}>
                  - {requirement}
                </Text>
              );
            })}
          </View>
        )}
        <View style={styles.description}>
          <Text style={{ fontFamily: "OrkneyRegular" }}>{text.replace(regex, "")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
    fontFamily: "OrkneyBold",
    textAlign: "center",
    fontSize: 30,
    width: "100%",
  },
  description: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    marginTop: 30,
  },
});
