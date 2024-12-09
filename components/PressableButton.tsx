import {
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ReactNode } from "react";
import colors from "@/constants/colors";

type PressableButtonProps = {
  children: ReactNode;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle>;
};

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
