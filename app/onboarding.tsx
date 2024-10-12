import { View, StyleSheet} from "react-native";
import { PlantlyButton } from "@/components/PlantlyButton";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
    const router = useRouter();
    const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);

    const handlePress = () => {
        toggleHasOnboarded();
        router.replace("/");
    };

    return (
    <View style={styles.container}>
      <PlantlyButton title="Let me in!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});