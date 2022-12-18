import _ from "lodash";
import React, { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";

const DayTwo = lazy(() =>
  import("../../components/30DaysOfReact/day-two/DayTwo")
);
const DayThree = lazy(() =>
  import("../../components/30DaysOfReact/day-three/DayThree")
);
const DayFour = lazy(() =>
  import("../../components/30DaysOfReact/day-four/DayFour")
);
const DayFive = lazy(() =>
  import("../../components/30DaysOfReact/day-five/DayFive")
);
const DaySix = lazy(() =>
  import("../../components/30DaysOfReact/day-six/DaySix")
);
const DayEight = lazy(() =>
  import("../../components/30DaysOfReact/day-eight/DayEight")
);
const DayNine = lazy(() =>
  import("../../components/30DaysOfReact/day-nine/DayNine")
);
const DayTen = lazy(() =>
  import("../../components/30DaysOfReact/day-ten/DayTen")
);
const DayEleven = lazy(() =>
  import("../../components/30DaysOfReact/day-eleven/DayEleven")
);
const DayTwelve = lazy(() =>
  import("../../components/30DaysOfReact/day-twelve/DayTwelve")
);

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
  "day-ten": DayTen,
  "day-eleven": DayEleven,
  "day-twelve": DayTwelve,
};

export default function page() {
  const PageComponent = components[useLoaderData()] ?? DayTwo;

  return (
    <Suspense>
      <PageComponent />
    </Suspense>
  );
}
