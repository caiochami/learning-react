import { useState } from "react";
import { Bars3BottomLeftIcon, BellIcon } from "@heroicons/react/24/outline";

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import ProfileDropdown from "../components/Layouts/ProfileDropdown";
import SearchBar from "../components/Layouts/SearchBar";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import StaticSidebar from "../components/Layouts/Sidebar/StaticSidebar";

export default function Root() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <StaticSidebar />

        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <SearchBar />
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <ProfileDropdown />
              </div>
            </div>
          </div>

          <main>
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="relative p-2 rounded-lg border-4 border-dashed border-gray-200">
                    <div
                      className={`absolute right-0 top-0 bg-gray-200 opacity-50 w-full h-full ${
                        navigation.state != "loading" && "hidden"
                      }`}
                    ></div>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
