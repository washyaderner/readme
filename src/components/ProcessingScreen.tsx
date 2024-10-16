import * as React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ProcessingScreenProps = {
  route: RouteProp<MainStackParamList, "Processing">;
  navigation: FrameNavigationProp<MainStackParamList, "Processing">;
};

export function ProcessingScreen({ route, navigation }: ProcessingScreenProps) {
  const { text, voice } = route.params;

  useEffect(() => {
    // Simulating API calls
    setTimeout(() => {
      // Placeholder for GPT-4 and ElevenLabs API integration
      const dummyAudioUrl = "https://example.com/audio.mp3";
      navigation.navigate("Playback", { audioUrl: dummyAudioUrl });
    }, 3000);
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <activityIndicator busy={true} />
      <label className="mt-4 text-center">Processing your request...</label>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});