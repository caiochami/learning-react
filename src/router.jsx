import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact, { contactLoader } from "./routes/react-router-tutorial/contact";
import Layout from "./components/Layouts/Layout";

import TicTacToeIndex from "./routes/tic-tac-toe";

import ReactRouterTutorialIndex, {
  contactsLoader,
} from "./routes/react-router-tutorial/index";
import DesigningReactHooksTheRightWayIndex from "./routes/designing-react-hooks-the-right-way";
import DesigningReactHooksTheRightWayChapterTwo from "./routes/designing-react-hooks-the-right-way/chapter-two/index";

import { FolderIcon, UsersIcon, PlayIcon } from "@heroicons/react/24/outline";

import { action as storeAction } from "./components/Contacts/CreateContact";
import { action as updateContact } from "./components/Contacts/EditContact";
import { action as destroyAction } from "./components/Contacts/DeleteContact";

export const navigation = [
  {
    name: "Tic Tac Toe",
    href: "/tic-tac-toe",
    icon: PlayIcon,
    children: [],
    current: false,
  },
  {
    name: "Designing React Hooks the Right Way",
    href: "/designing-react-hooks-the-right-way",
    icon: UsersIcon,
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
    children: [
      {
        path: "/tic-tac-toe",
        element: <TicTacToeIndex />,
      },
      {
        path: "/designing-react-hooks-the-right-way",
        element: <DesigningReactHooksTheRightWayIndex />,
      },
      {
        path: "/designing-react-hooks-the-right-way/chapter-two",
        element: <DesigningReactHooksTheRightWayChapterTwo />,
      },
      {
        path: "/react-router-tutorial",
        element: <ReactRouterTutorialIndex />,
        loader: contactsLoader,
        action: storeAction,
      },
      {
        path: "/react-router-tutorial/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: updateContact,
      },
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
]);
