import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/react-router-tutorial/contact";
import Root from "./routes/root";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    children: [],
    current: false,
  },
  {
    name: "Designing React Hooks the Right Way ",
    href: "#",
    icon: UsersIcon,
    children: [],
    current: false,
  },
  {
    name: "React Router Tutorial",
    href: "/react-router-tutorial",
    icon: FolderIcon,
    current: true,
    children: [
      {
        name: "Contact #1",
        href: "/react-router-tutorial/contacts/1",
        current: false,
      },
      {
        name: "Contact #2",
        href: "/react-router-tutorial/contacts/2",
        current: false,
      },
    ],
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    children: [],
    current: false,
  },
  {
    name: "Documents",
    href: "#",
    icon: InboxIcon,
    children: [],
    current: false,
  },
  {
    name: "Reports",
    href: "#",
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
    children: [],
  },
  {
    path: "/react-router-tutorial",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
