import Home from "./components/Home/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    main: () => <Home />,
  },
  {
    path: "/menu",
    text: "Menu",
    main: () => <h2>Bubblegum</h2>,
  },
];
