"use client";

import { useState } from "react";

import style from "@/styles/todo-item.module.css";

export default function TodoItem() {
  const [isDone, setIsDone] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const onChnageInputChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
  };

  const onClickUpdatedButton = () => {
    setIsUpdated(true);
  };

  const onClickCompletedButton = () => {
    setIsUpdated(false);
  };

  return (
    <li className={style.container}>
      <div className={style.contents}>
        <input type="checkbox" onChange={onChnageInputChecked} />
        {!isUpdated ? (
          <span className={`${isDone ? style.checked : ""}`}>
            todo를 입력해주세요
          </span>
        ) : (
          <input type="text" placeholder="수정할 내용을 입력해주세요" />
        )}
      </div>
      <div className={style.buttons}>
        {!isUpdated ? (
          <button onClick={onClickUpdatedButton}>수정</button>
        ) : (
          <button onClick={onClickCompletedButton}>완료</button>
        )}

        <button>삭제</button>
      </div>
    </li>
  );
}
