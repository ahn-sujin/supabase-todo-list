"use client";

import TodoInput from "@/components/todo-input";
import TodoItem from "@/components/todo-item";
import style from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <TodoInput />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
