import Header from "@/components/Header";
import colors from "@/constants/colors";
import { RootStackParams } from "@/types";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Detail() {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.preContent}>
        <Image source={{ uri: url }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <ScrollView style={styles.explanationContainer}>
            <Text style={styles.explanation}>{explanation}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.bg1,
  },
  preContent: {
    flex: 1,
    backgroundColor: colors.bg2,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 50,
    marginVertical: 24,
  },
  content: {
    paddingHorizontal: 26,
    paddingVertical: 14,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 50,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  explanationContainer: {
    marginTop: 14,
  },
  explanation: {
    color: "#fff",
    fontSize: 16,
  },
});
