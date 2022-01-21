import { VFC } from "react";

import { TodoItemCreator } from "@/components/model/TodoItemCreator";
import { TodoListFilters } from "@/components/model/TodoListFilters";
import { TodoListStats } from "@/components/model/TodoListStats";

export const About: VFC = () => {
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
    </div>
  );
};
