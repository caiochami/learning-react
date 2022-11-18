import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact, { contactLoader } from "./routes/react-router-tutorial/contact";
import Layout from "./components/Layouts/Layout";

import TicTacToeIndex from "./routes/tic-tac-toe";

import ReactRouterTutorialIndex, {
  contactsLoader,
} from "./routes/react-router-tutorial/index";
import ThirtyDaysOfReactIndex from "./routes/30-days-of-react/index";
import ThirtyDaysOfReactDayTwoIndex from "./routes/30-days-of-react/day-two";
import ThirtyDaysOfReactDayThreeIndex from "./routes/30-days-of-react/day-three";
import ThirtyDaysOfReactDayFourIndex from "./routes/30-days-of-react/day-four";

import {
  FolderIcon,
  PlayIcon,
  BoltIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import { action as storeAction } from "./components/Contacts/CreateContact";
import { action as updateContact } from "./components/Contacts/EditContact";
import { action as destroyAction } from "./components/Contacts/DeleteContact";

export const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    children: [],
    current: true,
  },
  {
    name: "Tic Tac Toe",
    href: "/tic-tac-toe",
    icon: PlayIcon,
    children: [],
    current: false,
  },
  {
    name: "30 Days Of React",
    href: "/30-days-of-react",
    icon: BoltIcon,
    children: [],
    current: false,
  },
  {
    name: "React Router Tutorial",
    href: "/react-router-tutorial",
    icon: FolderIcon,
    current: true,
  },
];

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToeIndex />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/react-router-tutorial",
    element: <ReactRouterTutorialIndex />,
    loader: contactsLoader,
    action: storeAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/react-router-tutorial/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: updateContact,
      },
      {
        path: "/react-router-tutorial/contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  {
    path: "/30-days-of-react",
    element: <ThirtyDaysOfReactIndex />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/30-days-of-react/day-two",
        element: <ThirtyDaysOfReactDayTwoIndex />,
      },
      {
        path: "/30-days-of-react/day-three",
        element: <ThirtyDaysOfReactDayThreeIndex />,
      },
      {
        path: "/30-days-of-react/day-four",
        element: <ThirtyDaysOfReactDayFourIndex />,
      },
    ],
  },
]);
