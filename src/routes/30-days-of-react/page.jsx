import _ from "lodash";
import React from "react";
import { useLoaderData } from "react-router-dom";

import DayTwo from "./day-two";
import DayThree from "./day-three";
import DayFour from "./day-four";
import DayFive from "./day-five";
import DaySix from "./day-six";
import DayEight from "./day-eight";

export async function pageLoader({ params }) {
  return params.page;
}

export const components = {
  "day-two": DayTwo,
  "day-three": DayThree,
  "day-four": DayFour,
  "day-five": DayFive,
  "day-six": DaySix,
  "day-eight": DayEight,
};

export default function page() {
  const page = useLoaderData();

  const PageComponent = components[page];

  return <PageComponent />;
}
