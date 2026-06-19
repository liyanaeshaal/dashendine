import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function JoinScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.kicker}>Join session</Text>
        <Text style={styles.title}>Enter a group code</Text>
        <Text style={styles.subtitle}>
          This screen will let someone join a dining session using a code or
          invite link.
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
