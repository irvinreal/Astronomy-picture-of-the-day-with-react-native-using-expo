import React, { FC } from "react";
import { Button, StyleSheet, View } from "react-native";

type ButtonType = {
  title: string;
  onPress?: () => void;
};

const ButtonRight: FC<ButtonType> = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default ButtonRight;
