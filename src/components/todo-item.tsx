"use client";

import { useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";

import { queryClient } from "@/config/ReactQueryClientProvider";
import { updateTodo, deleteTodo } from "@/actions/todo.action";
import { formatDate } from "@/utils/date";
import style from "@/styles/todo-item.module.css";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

export default function TodoItem({
  id,
  title,
  completed,
  created_at,
}: TodoItemProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [isDone, setIsDone] = useState(completed);
  const [isUpdated, setIsUpdated] = useState(false);

  const updateTodoData = useMutation({
    mutationFn: () =>
      updateTodo({
        id: id,
        title: newTitle,
        completed: isDone,
      }),
    onSuccess: () => {
      setIsUpdated(false);
      queryClient.invalidateQueries({
        queryKey: ["get", "todos"],
      });
    },
  });

  const deleteTodoData = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get", "todos"],
      });
    },
  });

  const onChnageInputChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
    updateTodoData.mutate();
  };

  const onChangNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const onClickUpdatedBtn = () => {
    setIsUpdated(true);
  };

  const onClickCompletedBtn = () => {
    updateTodoData.mutate();
  };

  const onClickDeleteBtn = () => {
    deleteTodoData.mutate();
  };

  return (
    <li className={style.container}>
      <div className={style.contents}>
        <input
          type="checkbox"
          onChange={onChnageInputChecked}
          checked={isDone}
        />
        {!isUpdated ? (
          <div className={style.title_wrapper}>
            <span className={style.time}>작성일: {formatDate(created_at)}</span>
            <span className={`${style.title} ${isDone ? style.checked : ""}`}>
              {title}
            </span>
          </div>
        ) : (
          <input
            type="text"
            value={newTitle}
            onChange={onChangNewTitle}
            placeholder="수정할 내용을 입력해주세요"
          />
        )}
      </div>

      <div className={style.buttons}>
        {!isUpdated ? (
          <button onClick={onClickUpdatedBtn} aria-label="TODO 수정">
            <AiOutlineEdit size="16" />
          </button>
        ) : (
          <button onClick={onClickCompletedBtn} aria-label="TODO 수정 완료">
            <AiOutlineCheck size="16" />
          </button>
        )}
        <button
          className={style.delete_btn}
          onClick={onClickDeleteBtn}
          aria-label="TODO 삭제"
        >
          <AiOutlineDelete size="16" />
        </button>
      </div>
    </li>
  );
}
