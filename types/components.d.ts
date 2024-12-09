import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ListItemProps = {
  item: ListItem;
  updateItem: (id: string) => void;
};

export type PressableButtonProps = {
  children: ReactNode;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
};

export type NewListItemModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  handleSubmit: (item: string) => void;
};
