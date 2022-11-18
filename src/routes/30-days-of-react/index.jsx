import _ from "lodash";
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import { classNames } from "../../utils/helpers";

import { replace, capitalize } from "lodash";

export default function index() {
  const location = useLocation();

  const isActive = ({ isActive }) =>
    classNames(
      isActive
        ? "bg-gray-300 text-white ring-2 ring-gray-400"
        : "bg-gray-200 hover:bg-gray-100 text-gray-700",
      "text-gray-800 rounded-2xl px-2"
    );

  const pages = ["day-two", "day-three", "day-four"];

  return (
    <Layout title="30 Days Of React">
      <div className="bg-gray-500 border rounded-3xl p-2 mb-6 flex flex-row gap-2">
        <NavLink
          className={() =>
            classNames(
              location.pathname === "/30-days-of-react"
                ? "bg-gray-300 text-white ring-2 ring-gray-400"
                : "bg-gray-200 hover:bg-gray-100 text-gray-700",
              "text-gray-800 rounded-2xl px-2"
            )
          }
          to="/30-days-of-react"
        >
          Intro
        </NavLink>

        {pages.map((page) => (
          <NavLink
            className={isActive}
            to={`/30-days-of-react/${page}`}
            key={page}
          >
            {capitalize(replace(page, "-", " "))}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </Layout>
  );
}
