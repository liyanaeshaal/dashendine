import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.kicker}>Create session</Text>
        <Text style={styles.title}>Start a dining group</Text>
        <Text style={styles.subtitle}>
          This screen will let a user create a group dining session.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  kicker: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F15A3B",
  },
  title: {
    marginTop: 12,
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
    color: "#21130D",
  },
  subtitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#6F5A4D",
  },
});
