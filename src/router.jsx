import { lazyLoad } from "./utils/lazyLoad";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact, { contactLoader } from "./routes/react-router-tutorial/contact";
import Layout from "./components/Layouts/Layout";

const TicTacToe = lazyLoad("../routes/tic-tac-toe");

const ReactRouterTutorial = lazyLoad("../routes/react-router-tutorial/index");

import { contactsLoader } from "./routes/react-router-tutorial/index";

const ThirtyDaysOfReact = lazyLoad("../routes/30-days-of-react/index");

const ThirtyDaysOfReactPage = lazyLoad("../routes/30-days-of-react/page");

import { pageLoader } from "./routes/30-days-of-react/page";

import {
  FolderIcon,
  PlayIcon,
  BoltIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import { action as storeAction } from "./components/Contacts/CreateContact";
import { action as updateContact } from "./components/Contacts/EditContact";
import { action as destroyAction } from "./components/Contacts/DeleteContact";
import { action as favoriteAction } from "./components/Contacts/Favorite";

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
    element: (
      <Suspense>
        <TicTacToe />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/react-router-tutorial",
    element: (
      <Suspense>
        <ReactRouterTutorial />
      </Suspense>
    ),
    loader: contactsLoader,
    action: storeAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/react-router-tutorial/contacts/:contactId",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
        loader: contactLoader,
        action: updateContact,
      },
      {
        path: "/react-router-tutorial/contacts/:contactId/favorite",
        action: favoriteAction,
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
    element: (
      <Suspense>
        <ThirtyDaysOfReact />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/30-days-of-react/:page",
        element: (
          <Suspense>
            <ThirtyDaysOfReactPage />
          </Suspense>
        ),
        loader: pageLoader,
      },
    ],
  },
]);
