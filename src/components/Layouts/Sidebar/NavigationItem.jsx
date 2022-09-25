import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/helpers";

export default function NavigationItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={classNames(
          item.current
            ? "bg-indigo-800 text-white"
            : "text-indigo-100 hover:bg-indigo-600",
          "group flex flex-row px-2 py-2 text-base font-medium rounded-md"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <item.icon
          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
          aria-hidden="true"
        />
        {item.name}
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul className="bg-white rounded-md my-1 py-1 text-xs">
          {item.children.map((child) => (
            <li className="hover:bg-gray-200 px-4" key={child.name}>
              <Link to={child.href}>{child.name}</Link>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
}
