import React from "react";

export default function index() {
  const welcome = "Welcome to 30 Days Of React Challenge";
  const title = "Getting Started React";
  const subtitle = "JavaScript Library";
  const author = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
  };
  const date = "Oct 2, 2020";

  const header = (
    <div>
      <div className="bg-blue-300">
        <h1 className="text-3xl">{welcome}</h1>
        <h2 className="text-2xl">{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {author.firstName} {author.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </div>
  );

  const numOne = 3;
  const numTwo = 2;

  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  );

  const yearBorn = 1820;
  const currentYear = 2020;
  const age = currentYear - yearBorn;
  const personAge = (
    <p>
      {" "}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  );

  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

  const main = (
    <div>
      <div className="">
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
    </div>
  );

  const copyRight = "Copyright 2020";

  const footer = (
    <div>
      <div className="bg-blue-300">
        <p>{copyRight}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 divide-y-2 text-center">
      {header}
      {main}
      {footer}
    </div>
  );
}
