import Home from "./components/Home/Home";
import Type from "./components/Type/Type";

export const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    main: () => <Home />,
  },
  {
    path: "/type",
    text: "Type",
    main: () => <Type />,
  },
];
