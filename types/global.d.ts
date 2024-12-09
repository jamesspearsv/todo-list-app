declare global {
  type TodoList = ListItem[] | [];
  type ListItem = {
    id: string;
    title: string;
    completed: boolean;
  };
}

export {};
