import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type PlaybackScreenProps = {
  route: RouteProp<MainStackParamList, "Playback">;
  navigation: FrameNavigationProp<MainStackParamList, "Playback">;
};

export function PlaybackScreen({ route }: PlaybackScreenProps) {
  const { audioUrl } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    // Placeholder for audio playback logic
    setIsPlaying(!isPlaying);
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="mb-4 text-center">Audio ready for playback</label>
      <button
        className={`p-2 rounded ${isPlaying ? 'bg-red-500' : 'bg-green-500'} text-white`}
        text={isPlaying ? "Pause" : "Play"}
        onTap={togglePlayback}
      />
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