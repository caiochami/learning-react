import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/react-router-tutorial/contact";
import Root from "./routes/root";
import ReactRouterTutorialIndex from "./routes/react-router-tutorial/index";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { getContacts } from "./contacts";

async function contactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export const navigation = [
  {
    name: "Dashboard",
    href: null,
    icon: HomeIcon,
    children: [],
    current: false,
  },
  {
    name: "Designing React Hooks the Right Way ",
    href: null,
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
  {
    name: "Calendar",
    href: null,
    icon: CalendarIcon,
    children: [],
    current: false,
  },
  {
    name: "Documents",
    href: null,
    icon: InboxIcon,
    children: [],
    current: false,
  },
  {
    name: "Reports",
    href: null,
    icon: ChartBarIcon,
    children: [],
    current: false,
  },
];

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/react-router-tutorial",
        element: <ReactRouterTutorialIndex />,
        loader: contactsLoader,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
