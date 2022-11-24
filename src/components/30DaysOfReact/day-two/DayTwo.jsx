import React from "react";
import { faker } from "@faker-js/faker";

const songNames = [
  faker.music.songName(),
  faker.music.songName(),
  faker.music.songName(),
  faker.music.songName(),
  faker.music.songName(),
];

const header = (
  <div className="bg-red-200 p-2 text-red-500">
    <h1 className="text-center font-bold text-lg">
      Welcome to 30 Days Of React
    </h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Caio Chami</p>
    <small>Oct 2, 2020</small>
  </div>
);

const main = (
  <div className="bg-green-200 p-2 text-green-500">
    <p>Prerequisite to get started react.js:</p>
    <ul className="list-disc list-inside">
      <li className="text-xs">HTML</li>
      <li className="text-xs">CSS</li>
      <li className="text-xs">JavaScript</li>
    </ul>
    <p className="mt-4">Songs:</p>
    <ul className="list-disc list-inside">
      {songNames.map((songName) => (
        <li className="text-xs" key={songName}>
          {songName}
        </li>
      ))}
    </ul>
  </div>
);

const footer = (
  <div className="bg-blue-200 p-2 text-blue-500 text-center">
    <p>Copyright 2020</p>
  </div>
);

export default function DayTwo() {
  return (
    <div className="flex flex-col gap-4 divide-y-2">
      {header}
      {main}
      {footer}
    </div>
  );
}
