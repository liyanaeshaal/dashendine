import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>🍽️</Text>
        </View>

        <Text style={styles.kicker}>Dashendine</Text>

        <Text style={styles.title}>
          Decide where to eat, without the group debate.
        </Text>

        <Text style={styles.subtitle}>
          Create a dining session, invite your people, swipe through
          restaurants, and match when the group likes the same spot.
        </Text>

        <View style={styles.actions}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/create" as never)}
          >
            <Text style={styles.primaryButtonText}>Create session</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push("/join" as never)}
          >
            <Text style={styles.secondaryButtonText}>Join with code</Text>
          </Pressable>
        </View>

        <View style={styles.previewCard}>
          <View>
            <Text style={styles.previewLabel}>Tonight&apos;s match</Text>
            <Text style={styles.previewTitle}>Thai, ramen, or tacos?</Text>
          </View>

          <Text style={styles.previewEmoji}>🔥</Text>
        </View>

        <View style={styles.steps}>
          <View style={styles.step}>
            <Text style={styles.stepEmoji}>1</Text>
            <Text style={styles.stepText}>Create a group session</Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepEmoji}>2</Text>
            <Text style={styles.stepText}>Everyone swipes restaurants</Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepEmoji}>3</Text>
            <Text style={styles.stepText}>Match on a shared favorite</Text>
          </View>
        </View>
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
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  logoText: {
    fontSize: 32,
  },
  kicker: {
    marginTop: 28,
    fontSize: 16,
    fontWeight: "700",
    color: "#F15A3B",
    letterSpacing: 0.4,
  },
  title: {
    marginTop: 12,
    fontSize: 38,
    lineHeight: 44,
    fontWeight: "800",
    color: "#21130D",
  },
  subtitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#6F5A4D",
  },
  actions: {
    marginTop: 32,
    gap: 12,
  },
  primaryButton: {
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F15A3B",
    shadowColor: "#F15A3B",
    shadowOpacity: 0.28,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  secondaryButton: {
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EFD1BD",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2B1A12",
  },
  previewCard: {
    marginTop: 32,
    padding: 20,
    borderRadius: 28,
    backgroundColor: "#2B1A12",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  previewLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#F7BFA7",
  },
  previewTitle: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  previewEmoji: {
    fontSize: 34,
  },
  steps: {
    marginTop: 24,
    gap: 12,
  },
  step: {
    minHeight: 54,
    borderRadius: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  stepEmoji: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",
    textAlign: "center",
    lineHeight: 28,
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
    backgroundColor: "#F15A3B",
  },
  stepText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "700",
    color: "#352116",
  },
});
