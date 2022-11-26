import _ from "lodash";
import React from "react";
import { useLoaderData } from "react-router-dom";

import DayTwo from "../../components/30DaysOfReact/day-two/DayTwo";
import DayThree from "../../components/30DaysOfReact/day-three/DayThree";
import DayFour from "../../components/30DaysOfReact/day-four/DayFour";
import DayFive from "../../components/30DaysOfReact/day-five/DayFive";
import DaySix from "../../components/30DaysOfReact/day-six/DaySix";
import DayEight from "../../components/30DaysOfReact/day-eight/DayEight";
import DayNine from "../../components/30DaysOfReact/day-nine/DayNine";

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
  "day-nine": DayNine,
};

export default function page() {
  const PageComponent = components[useLoaderData()] ?? DayTwo;

  return <PageComponent />;
}