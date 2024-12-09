import { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "@/components/ListItem";
import PressableButton from "@/components/PressableButton";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";
import defaultList from "@/constants/defaultList";

export default function Index() {
  const [todoList, setTodoList] = useState(defaultList);

  function handleItemUpdate(id: string) {
    const newList = [...todoList];

    for (const item of newList) {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    }

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
      <Text style={styles.pageHeading}>Today's To-Do List</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return <ListItem item={item} updateItem={handleItemUpdate} />;
          }}
        />
      </View>
      <View>
        <PressableButton
          onPress={() => console.log("I was pressed")}
          styleProp={styles.button}
        >
          <Feather name="plus" size={24} color={colors.white} />
        </PressableButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageHeading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    paddingVertical: 8,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    width: "100%",
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
});
