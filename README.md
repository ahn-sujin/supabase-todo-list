# Todo List
> 이 프로젝트는 supabase를 이용해 todo list를 구현했습니다.

<img width="425" alt="스크린샷 2025-03-09 오전 12 20 13" src="https://github.com/user-attachments/assets/b5cd8e31-03b1-4875-903f-3f598a0695e2" />

## 1️⃣ 실행 방법
1. 프로젝트 clone or Download ZIP
2. 의존성 설치
   ```
   npm install
   ```
4. 서버 실행
   ```
   npm run dev
   ```

## 2️⃣ 사용 기술
### FrontEnd
- Typescript, Next.js(15.2.0), CSS Module, Tanstack Query
### BackEnd
- Supabase, Server Action

## 3️⃣ 구현 기능
### Todo 목록 조회
- Supabase에서 todos 테이블의 데이터를 불러와 화면에 렌더링
- TanStack Query를 사용하여 데이터 캐싱 및 자동 새로고침 처리
- 검색 기능
  - 검색창에 아무것도 입력되지 않은 경우 : 전체 Todo 목록 조회
  - 검색어 입력한 경우 : 해당 검색어를 포함한 Todo 목록을 필터링하여 조회
    
### Todo 생성
- 입력한 내용을 바탕으로 새로운 Todo 추가
- 서버 액션을 활용한 Supabase에 데이터 삽입
- TanStack Query의 useMutation을 활용해 생성 후 자동으로 목록 갱신

### Todo 수정
- 특정 Todo 내용 수정
- 서버 액션을 활용한 Supabase 데이터 수정
- TanStack Query의 useMutation을 활용해 수정 후 캐시 동기화

### Todo 삭제
- 특정 Todo 삭제
- 서버 액션을 활용한 Supabase 데이터 삭제
- 삭제 후 자동으로 목록에서 제거되고, TanStack Query를 통해 캐시 동기화

## 4️⃣ 프로젝트 구조
```
supabase-todo
├─ README.md
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ actions
│  │  └─ todo.action.ts
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ layout.tsx
│  │  ├─ middleware.ts
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ loader.tsx
│  │  └─ todo-item.tsx
│  ├─ config
│  │  └─ ReactQueryClientProvider.tsx
│  ├─ styles
│  │  ├─ globals.css
│  │  ├─ layout.module.css
│  │  ├─ loader.module.css
│  │  ├─ page.module.css
│  │  ├─ reset.css
│  │  └─ todo-item.module.css
│  ├─ types
│  │  └─ db.ts
│  └─ utils
│     ├─ date.ts
│     └─ supabase
│        ├─ client.ts
│        └─ server.ts
└─ tsconfig.json
```
