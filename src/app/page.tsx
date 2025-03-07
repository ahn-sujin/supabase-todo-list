"use client";

import Searchbar from "@/components/searchbar";
import TodoItem from "@/components/todo-item";
import style from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <Searchbar />
      <ul>
        <TodoItem />
      </ul>
      <button className={style.add_btn}>ADD TODO</button>
    </div>
  );
}
