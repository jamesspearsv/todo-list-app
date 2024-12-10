import { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "@/components/ListItem";
import PressableButton from "@/components/PressableButton";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";
import defaultList from "@/constants/defaultList";
import NewListItemModal from "@/components/NewListItemModal";

export default function Index() {
  const [todoList, setTodoList] = useState<TodoList>(defaultList);
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
        <Text style={styles.heading}>Today's To-Do List</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return <ListItem item={item} updateItem={handleItemUpdate} />;
          }}
        />
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
        setModalVisible={setModalVisible}
        handleSubmit={handleAddNewItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
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
