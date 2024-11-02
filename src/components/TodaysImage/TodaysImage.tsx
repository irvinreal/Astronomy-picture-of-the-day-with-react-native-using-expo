import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ButtonRight from "@/components/ButtonRight/ButtonRight";
import colors from "@/constants/colors";
import { PostImage, PostImageNavigationProps } from "@/types";

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <ButtonRight title="View" onPress={handleViewPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg2,
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodaysImage;
