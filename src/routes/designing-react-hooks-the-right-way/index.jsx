import React from "react";
import { Link } from "react-router-dom";
import SimpleCard from "../../components/SimpleCard";

const chapters = [
  {
    name: "Chapter Two",
    url: "/designing-react-hooks-the-right-way/chapter-two",
  },
];

export default function Index() {
  return (
    <SimpleCard title="Chapters">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ul className="mt-4">
          {chapters.map(({ name, url }) => (
            <li
              key={name}
              className="hover:bg-gray-200 bg-gray-100 p-4 rounded-md font-semibold cursor-pointer"
            >
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </SimpleCard>
  );
}
