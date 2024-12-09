import { Text, View, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";

type ListItem = {
  id: string;
  title: string;
  completed: boolean;
};

type ListItemProps = {
  item: ListItem;
  updateItem: (id: string) => void;
};

export default function ListItem({ item, updateItem }: ListItemProps) {
  return (
    <View>
      <Pressable
        onPress={() => updateItem(item.id)}
        style={styles.itemContainer}
      >
        <Text style={[styles.itemText, item.completed && styles.completedItem]}>
          {item.title}
        </Text>
        <Feather
          name={!item.completed ? "square" : "check-square"}
          size={32}
          color={!item.completed ? colors.white : colors.lightGrey}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    width: "95%",
    margin: "auto",
    padding: 16,
    borderRadius: 10,
    marginTop: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: colors.white,
  },
  completedItem: {
    color: colors.lightGrey,
    textDecorationLine: "line-through",
    textDecorationColor: colors.lightGrey,
    textDecorationStyle: "solid",
    fontStyle: "italic",
  },
});
