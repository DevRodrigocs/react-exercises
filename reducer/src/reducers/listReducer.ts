import { Item } from "@/types/Item";

type AddAction = {
  type: 'add';
  payload: { text: string };
};

type EditTextAction = {
  type: 'editText';
  payload: { id: number; newText: string };
};

type ToggleAction = {
  type: 'toggleDone';
  payload: { id: number };
};

type RemoveAction = {
  type: 'remove';
  payload: { id: number };
};

type ListActions = AddAction | EditTextAction | ToggleAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions): Item[] => {
  switch (action.type) {
    case 'add':
      return [
        ...list,
        {
          id: Date.now(),
          text: action.payload.text,
          done: false,
        },
      ];

    case 'editText':
      return list.map(t =>
        t.id === action.payload.id
          ? { ...t, text: action.payload.newText }
          : t
      );

    case 'toggleDone':
      return list.map(t =>
        t.id === action.payload.id
          ? { ...t, done: !t.done }
          : t
      );

    case 'remove':
      return list.filter(t => t.id !== action.payload.id);

    default:
      return list;
  }
};
