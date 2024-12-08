import { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "@/components/ListItem";

export default function Index() {
  const [todoList, setTodoList] = useState([
    {
      id: (Math.random() * Math.random()).toString(),
      title: "Learn react native",
      completed: true,
    },
    {
      id: (Math.random() * Math.random()).toString(),
      title: "Build super cool app",
      completed: false,
    },
    {
      id: (Math.random() * Math.random()).toString(),
      title: "Makes tons of money",
      completed: false,
    },
  ]);

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
      <Text style={styles.pageHeading}>To-Do List App</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return <ListItem item={item} updateItem={handleItemUpdate} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageHeading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
});
