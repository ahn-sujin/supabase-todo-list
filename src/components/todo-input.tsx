"use client";

import style from "@/styles/todo-input.module.css";

export default function TodoInput() {
  return (
    <div className={style.container}>
      <input placeholder="할일을 입력해주세요" />
      <button>입력</button>
    </div>
  );
}
