import {nanoid} from "nanoid";
export const MENU = [
  {
    id: nanoid(5),
    title: "Главная",
    url: "/",
  },
  {
    id: nanoid(5),
    title: "Портфолио",
    url: "/portfolio",
  },
  {
    id: nanoid(5),
    title: "Блог",
    url: "/blog",
  },
  {
    id: nanoid(5),
    title: "О нас",
    url: "/about",
  },
  {
    id: nanoid(5),
    title: "Контакты",
    url: "/contact",
  },
  {
    id: nanoid(5),
    title: "Панель",
    url: "/dashboard",
  },
];

export const SOCIAL_ICONS_SIZE = 20;

// about
export const about = {
  image: "/aboutImg.jpeg",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem corporis esse ex quia, quod!",

}