import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import ButtonRight from "@/components/ButtonRight/ButtonRight";
import colors from "@/constants/colors";
import { PostImageNavigationProps, PostImage as PostImageType } from "@/types";

const PostImage: FC<PostImageType> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <ButtonRight title="View" onPress={handleViewPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg3,
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
});

export default PostImage;
