import React from "react";
import { navigation } from "../../../router";
import { classNames } from "../../../utils/helpers";
import NavigationItem from "./NavigationItem";

export default function StaticSidebar() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
            alt="Your Company"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <NavigationItem item={item} key={item.name} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
