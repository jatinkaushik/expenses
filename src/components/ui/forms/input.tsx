import { TextInput } from "react-native-paper";
import { useState } from "react";
import { useTheme } from "react-native-paper";

const Input = () => {
const [text, setText] = useState("");
const theme = useTheme();

  return (
    <TextInput
      label="Email"
      value={text}
      placeholderTextColor={theme.colors.secondary}
      outlineColor="red"
      textColor={theme.colors.primary}
      onChangeText={text => setText(text)}
    />
  );
}

export {Input};