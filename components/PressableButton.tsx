import { View, Pressable, StyleSheet } from "react-native";
import { PressableButtonProps } from "@/types/components";

export default function PressableButton({
  children,
  onPress,
  styleProp = [],
}: PressableButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[...styleProp, styles.pressable]}>
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
