import { NewListItemModalProps } from "@/types/components";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";
import PressableButton from "@/components/PressableButton";
import { useState, useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function NewListItemModal({
  modalVisible,
  dismissModal,
  handleSubmit,
}: NewListItemModalProps) {
  // todo : Add swipe to dismiss gesture

  const [item, setItem] = useState<string | null>(null);

  function handleTextChange(text: string) {
    setItem(text);
  }

  function handleAdd() {
    if (!item) return;
    handleSubmit(item);
    setItem(null);
    dismissModal();
  }

  function handleCancel() {
    setItem(null);
    dismissModal();
  }

  const translateY = useSharedValue(0);
  const swipeGesture = Gesture.Pan().onChange((e) => {
    const limit = {
      lower: 0,
      upper: 200,
    };

    console.log(translateY.value);
    console.log("velocity", e.velocityY);

    if (e.velocityY > 2500) {
      runOnJS(dismissModal)();
    }

    // if (
    //   (translateY.value > limit.lower && translateY.value < limit.upper) ||
    //   (translateY.value <= limit.lower && e.changeY > 0) ||
    //   (translateY.value >= limit.upper && e.changeY < 0)
    // ) {
    //   translateY.value += e.changeY;
    // }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  });

  return (
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.overlay, animatedStyle]}>
          <View style={styles.closeContainer}>
            <View style={styles.closeBar}></View>
            {/*<PressableButton*/}
            {/*  onPress={dismissModal}*/}
            {/*  styleProp={[styles.closeButton]}*/}
            {/*>*/}
            {/*  <Feather name="x" size={28} color={colors.white} />*/}
            {/*</PressableButton>*/}
          </View>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
          >
            What will you do next?
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={item ? item : ""}
              onChangeText={handleTextChange}
              style={styles.textInput}
              placeholder="Add A New Task"
              placeholderTextColor={colors.lightGrey}
              autoFocus={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PressableButton
              onPress={handleAdd}
              styleProp={[styles.actionButton, styles.addButton]}
            >
              <Text style={styles.buttonText}>Add</Text>
            </PressableButton>
            <PressableButton
              onPress={handleCancel}
              styleProp={[styles.actionButton, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </PressableButton>
          </View>
        </Animated.View>
      </GestureDetector>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    marginTop: "auto",
    backgroundColor: colors.white,
    height: "65%",
    width: "100%",
    borderRadius: 25,
    padding: 16,
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  closeButton: {
    margin: "auto",
    backgroundColor: colors.grey,
    padding: 14,
    borderRadius: 100,
  },
  closeBar: {
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightGrey,
    borderRadius: 100,
    borderWidth: 1,
    height: 1,
    width: 150,
  },
  inputContainer: {
    marginVertical: 16,
  },
  textInput: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  actionButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: colors.grey,
  },
  addButton: {
    backgroundColor: colors.blue,
  },
  cancelButton: {
    backgroundColor: "red",
  },
});
