import { Text, View, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/colors";
import id from "ajv/lib/vocabularies/core/id";

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
    <View style={[styles.itemContainer]}>
      <Text style={[styles.itemText, item.completed && styles.completedItem]}>
        {item.title}
      </Text>
      <Pressable onPress={() => updateItem(item.id)}>
        <Feather
          name={!item.completed ? "square" : "check-square"}
          size={24}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.grey,
    width: "95%",
    margin: "auto",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: colors.white,
  },
  completedItem: {
    textDecorationLine: "line-through",
    textDecorationColor: colors.white,
    textDecorationStyle: "solid",
  },
});