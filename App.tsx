import colors from "@/constants/colors";
import Routes from "@/routes";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
    paddingTop: Platform.OS === "android" ? 30 : undefined,
  },
});

export default App;
