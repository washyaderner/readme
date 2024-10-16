import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

const voices = [
  "Voice 1", "Voice 2", "Voice 3", "Voice 4", "Voice 5",
  "Voice 6", "Voice 7", "Voice 8", "Voice 9", "Voice 10"
];

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(voices[0]);

  const handleProcess = () => {
    if (text.trim()) {
      navigation.navigate("Processing", { text, voice: selectedVoice });
    }
  };

  return (
    <scrollView className="p-4 bg-gray-100 dark:bg-gray-900">
      <textView
        className="mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded"
        hint="Enter text or URL"
        text={text}
        onTextChange={(e) => setText(e.value)}
      />
      <listPicker
        className="mb-4"
        items={voices}
        selectedIndex={voices.indexOf(selectedVoice)}
        onSelectedIndexChange={(e) => setSelectedVoice(voices[e.newIndex])}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        text="Process"
        onTap={handleProcess}
      />
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 16,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    padding: 8,
  },
  button: {
    fontSize: 18,
    color: "#ffffff",
    backgroundColor: "#2e6ddf",
    padding: 8,
    borderRadius: 4,
  },
});