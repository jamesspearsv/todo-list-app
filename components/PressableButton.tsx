import {
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { PressableButtonProps } from "@/types/components";

// todo : Add swipe to dismiss gesture

export default function PressableButton({
  children,
  onPress,
  styleProp,
}: PressableButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.pressable, styleProp]}>
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  pressable: {
    alignItems: "center",
    justifyContent: "center",
  },
});
