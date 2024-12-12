import { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "@/components/ListItem";
import PressableButton from "@/components/PressableButton";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "@/constants/colors";
import NewListItemModal from "@/components/NewListItemModal";

export default function Index() {
  const [todoList, setTodoList] = useState<TodoList>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleItemUpdate(id: string) {
    const newList = [...todoList];

    for (const item of newList) {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    }

    setTodoList(newList);
  }

  function dismissModal() {
    setModalVisible(false);
  }

  function handleAddNewItem(item: string) {
    const newItem: ListItem = {
      id: (Math.random() * Math.random()).toString(36),
      completed: false,
      title: item,
    };

    const newList = [...todoList];
    newList.push(newItem);
    setTodoList(newList);
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 8,
        }}
      >
        <View style={styles.headingContainer}>
          <MaterialCommunityIcons
            name="bullseye-arrow"
            size={42}
            color={colors.grey}
          />
          <Text style={styles.heading}>Today's Tasks</Text>
        </View>
        <View style={styles.listContainer}>
          {todoList.length === 0 ? (
            <View style={styles.placeholderContainer}>
              <FontAwesome5 name="frown" size={64} color={colors.lightGrey} />
              <Text style={styles.placeholderText}>
                Add something to you list to get started
              </Text>
            </View>
          ) : (
            <FlatList
              data={todoList}
              renderItem={({ item }) => {
                return <ListItem item={item} updateItem={handleItemUpdate} />;
              }}
            />
          )}
        </View>
        <View style={styles.addButtonContainer}>
          <PressableButton
            onPress={() => setModalVisible(true)}
            styleProp={[styles.button]}
          >
            <Feather name="plus" size={24} color={colors.white} />
          </PressableButton>
        </View>
        <NewListItemModal
          modalVisible={modalVisible}
          dismissModal={dismissModal}
          handleSubmit={handleAddNewItem}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    width: "100%",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    paddingVertical: 8,
    textAlign: "center",
  },
  placeholderContainer: {
    flex: 1,
    width: "100%",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: colors.lightGrey,
    fontSize: 16,
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
  button: {
    backgroundColor: colors.grey,
    paddingHorizontal: 48,
    paddingVertical: 10,
    borderRadius: 16,
  },
  addButtonContainer: {
    marginTop: 16,
  },
});
