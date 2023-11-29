import React from "react";
import { TouchableOpacity, Image } from "react-native";

interface ScreenHeaderBtnType {
  dimension: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({ dimension, handlePress }: ScreenHeaderBtnType) => {
  return (
    <TouchableOpacity className="w-7 h-7 bg-red" onPress={handlePress}>
      <Image
        source={require("../assets/icons/menu.png")}
        style={{ width: 30, height: 30 }}
        className="w-7 h-7 px-4 bg-white"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
