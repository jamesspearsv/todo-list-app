import { NewListItemModalProps } from "@/types/components";
import { Modal, StyleSheet, View, Text, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";
import PressableButton from "@/components/PressableButton";
import { useState } from "react";
import values from "ajv/lib/vocabularies/jtd/values";

export default function NewListItemModal({
  modalVisible,
  setModalVisible,
  handleSubmit,
}: NewListItemModalProps) {
  const [item, setItem] = useState<string | null>(null);

  function handleTextChange(text: string) {
    setItem(text);
  }

  function handleAdd() {
    if (!item) return;
    handleSubmit(item);
    setItem(null);
    setModalVisible(false);
  }

  function handleCancel() {
    setItem(null);
    setModalVisible(false);
  }

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
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
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
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    marginTop: "auto",
    backgroundColor: colors.white,
    height: "70%",
    width: "100%",
    borderRadius: 25,
    padding: 16,
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  closeButton: {
    margin: "auto",
    backgroundColor: colors.grey,
    padding: 14,
    borderRadius: 100,
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
