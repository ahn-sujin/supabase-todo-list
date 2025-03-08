"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";

import { createTodo, getTodos } from "@/actions/todo.action";

import TodoItem from "@/components/todo-item";
import Loader from "@/components/loader";

import style from "@/styles/page.module.css";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const getTodosData = useQuery({
    queryKey: ["get", "todos", searchInput],
    queryFn: () => getTodos({ searchInput }),
  });

  const createTodosData = useMutation({
    mutationFn: () =>
      createTodo({
        title: "새로운 할일",
        completed: false,
      }),

    onSuccess: () => {
      getTodosData.refetch();
    },
  });

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const onClickAddTodoBtn = () => {
    createTodosData.mutate();
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
      <ul className={style.list}>
        {getTodosData.isLoading && <Loader />}
        {getTodosData.isSuccess &&
          getTodosData.data.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              created_at={todo.created_at}
            />
          ))}
      </ul>
      <button onClick={onClickAddTodoBtn} className={style.add_btn}>
        ADD TODO
      </button>
    </div>
  );
}
