import { VFC } from "react";
import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "@/components/model/FilteredTodoListState";
import { TodoItem } from "@/components/model/TodoItem";

export const Index: VFC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
