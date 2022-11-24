import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../../Button";

const tools = (
  <div className="bg-gray-200 flex flex-col text-center p-2 gap-4">
    <p className="font-bold">Front End Technologies</p>
    <div className="flex flex-row gap-2 justify-between">
      <img src="/src/assets/html_logo.png" className="w-32 h-32" />
      <img src="/src/assets/css_logo.png" className="w-32 h-32" />
      <img src="/src/assets/html_logo.png" className="w-32 h-32" />
      <img src="/src/assets/react_logo.png" className="w-32 h-32" />
    </div>
  </div>
);

const subscribe = (
  <div className="w-full bg-cyan-200 rounded-md">
    <div className="flex flex-col gap-4 text-center p-4 font-mono w-2/3 mx-auto">
      <p className="text-3xl uppercase">Subscribe</p>
      <p>Sign up with email address to receive news and updates.</p>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <Button color="warning">Subscribe</Button>
      </div>
    </div>
  </div>
);

const skills = ["HTML", "CSS", "Sass", "JS", "React", "Mysql", "Gatsby", "Git"];

const userCard = (
  <div className="shadow-md flex flex-col p-2 gap-6 font-serif">
    <img
      src="/src/assets/asabeneh.jpg"
      className="w-32 h-32 object-contain rounded-full"
    />
    <div className="flex gap-2">
      <div className="uppercase font-semibold">Asabeneth Yetayeh</div>
      <CheckIcon className="w-5 h-5 text-white bg-teal-400 rounded-full" />
    </div>

    <p className="font-light">Senior Developer, Finland</p>

    <div className="uppercase">Skills</div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div
          className="px-2 py-1 bg-teal-500 text-white font-semibold rounded-md"
          key={skill}
        >
          {skill}
        </div>
      ))}
    </div>

    <div className="flex items-center gap-2 font-thin">
      <ClockIcon className="w-5 h-5" />
      Joined on Aug 30, 2020
    </div>
  </div>
);

export default function DayThree() {
  return (
    <div className="flex flex-col gap-2">
      {tools}
      {subscribe}
      {userCard}
    </div>
  );
}
