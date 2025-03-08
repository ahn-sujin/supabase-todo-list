"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";

import TodoItem from "@/components/todo-item";
import style from "@/styles/page.module.css";
import { createTodo, getTodos } from "../actions/todo-action";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const getTodosResponse = useQuery({
    queryKey: ["get", "todos", searchInput],
    queryFn: () => getTodos({ searchInput }),
  });
  console.log("getTodosResponse", getTodosResponse.data);

  const postTodosRequest = useMutation({
    mutationFn: () =>
      createTodo({
        title: "새로운 할일",
        completed: false,
      }),

    onSuccess: () => {
      // getTodosResponse.refetch();
      console.log("???");
    },
  });

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const onClickAddTodoBtn = () => {
    postTodosRequest.mutate();
  };

  return (
    <div className={style.container}>
      <div className={style.search_bar}>
        <input
          placeholder="찾고 싶은 할일을 입력해보세요!"
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <div>
          <AiOutlineSearch />
        </div>
      </div>
      <ul>
        {getTodosResponse.isLoading && <div>Loading...</div>}
        {getTodosResponse.isSuccess &&
          getTodosResponse.data.map((todo) => <TodoItem key={todo.id} />)}
      </ul>
      <button onClick={onClickAddTodoBtn} className={style.add_btn}>
        ADD TODO
      </button>
    </div>
  );
}
