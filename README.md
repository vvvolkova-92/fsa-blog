## Учебное приложение

Реализовано в рамках рассмотрения Next.js (фронт + бэк)

![Главная страница](https://s1.hostingkartinok.com/uploads/images/2023/09/e1ebc56ec73ce3b2f7aba7e6ad970e33.png)

### Что было сделано?
* Сверстаны компоненты (статика)
* Базовые стили и анимация при помощи **css-modules**
* Рассмотрен **роутинг Next.js** (в т.ч защищенный для неавторизованных пользователей)
* Рассмотрена **реализация api**
* **Светлая/темная тема**
* Реализована **авторизация** (**вход** при помощи **Яндекс ID** или регистрация через **email**)
* Возможность добавлять посты авторизированым пользователем, просматривать свои посты, а также их удалять
* В проекте были дополнительно использованы такие пакеты: 
  + bcryptjs
  + mongoose
  + next-auth
  + swr
  + nanoid

![Роутинг](https://s1.hostingkartinok.com/uploads/images/2023/09/f596d8d3c3091abdbdd7163e005c0420.png)
![Блог пост](https://s1.hostingkartinok.com/uploads/images/2023/09/f35f628d408625949b74a5ad9da72a61.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
