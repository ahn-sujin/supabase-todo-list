import style from "@/styles/loader.module.css";

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
      <div className={style.text}>로딩중...</div>
    </div>
  );
}
