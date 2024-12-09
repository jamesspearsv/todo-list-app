import { NewListItemModalProps } from "@/types/components";
import { Modal, StyleSheet, View } from "react-native";
import colors from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import PressableButton from "@/components/PressableButton";

export default function NewListItemModal({
  modalVisible,
  setModalVisible,
}: NewListItemModalProps) {
  return (
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.closeContainer}>
          <PressableButton
            onPress={() => setModalVisible(false)}
            styleProp={styles.closeButton}
          >
            <Feather name="x" size={28} color={colors.white} />
          </PressableButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    marginTop: "auto",
    backgroundColor: colors.white,
    height: "67%",
    width: "100%",
    borderRadius: 25,
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 8,
  },
  closeButton: {
    margin: "auto",
    backgroundColor: colors.grey,
    padding: 8,
    borderRadius: 25,
  },
});
