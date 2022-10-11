import React from "react";
import { Link } from "react-router-dom";
import SimpleCard from "../../components/SimpleCard";

const navigation = [
  {
    name: "Chapter Two",
    url: "/designing-react-hooks-the-right-way/chapter-two",
  },
];

export default function Index() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <SimpleCard title="Chapters">
        <ul className="mt-4">
          {navigation.map(({ name, url }) => (
            <li>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </SimpleCard>
    </div>
  );
}
