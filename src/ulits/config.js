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
  textWrapper1: {
    title: "Lorem ipsum dolor",
    description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fugit inventore quasi sapiente temporibus, tenetur. A, accusamus architecto eos error fuga libero, maxime non odio quas sequi suscipit temporibus.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fugit inventore quasi sapiente temporibus, tenetur. A, accusamus architecto eos error fuga libero, maxime non odio quas sequi suscipit temporibus.",

  },
  textWrapper2: {
    title: "Lorem ipsum dolor",
    description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fugit inventore quasi sapiente temporibus, tenetur. A, accusamus architecto eos error fuga libero, maxime non odio quas sequi suscipit temporibus.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  button: {
    title: "Связаться с нами",
    url: "/contact"
  }
};

export const contact = {
  image: "/contactImg.png",
  title: "Lorem ipsum dolor sit amet",
}

export const portfolio = {
  title: "Наши работы",
  gallery: [
    {id: nanoid(5), name: "Иллюстрации", url: "/portfolio/illustrations", image: ""},
    {id: nanoid(5), name: "Вебсайты", url: "/portfolio/websites", image: ""},
    {id: nanoid(5), name: "Приложения", url: "/portfolio/applications", image: ""}
  ],
  };
export const modes = { DARK: "dark", LIGHT: "light"};
export const img = "https://dummyimage.com/200x200/ba0fba/fff.jpg&text=+VVV";
export const BLOG_URL = "http://localhost:3000/api/posts";
export const REGISTER_URL = "/api/auth/registration";