"use client";

import { useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
          <button onClick={onClickUpdatedButton} aria-label="TODO 수정">
            <AiOutlineEdit size="16" />
          </button>
        ) : (
          <button onClick={onClickCompletedButton} aria-label="TODO 수정 완료">
            <AiOutlineCheck size="16" />
          </button>
        )}

        <button className={style.delete_btn} aria-label="TODO 삭제">
          <AiOutlineDelete size="16" />
        </button>
      </div>
    </li>
  );
}
