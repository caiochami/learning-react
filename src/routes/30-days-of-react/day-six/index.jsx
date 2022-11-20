import React from "react";
import { classNames, getNumberType, hexaColor } from "../../../utils/helpers";

import worldPopulationEntries from "../../../../data/30DaysOfReact/highest-population.json";

const totalPopulation = worldPopulationEntries[0].population;

const Block = ({ number }) => {
  const colorsMap = {
    prime: "bg-red-500",
    odd: "bg-yellow-500",
    even: "bg-green-500",
  };

  const classes = classNames(
    colorsMap[getNumberType(number)],
    "text-center p-2 text-white border-white border"
  );

  return <div className={classes}>{number}</div>;
};

const NumberGenerator = () => {
  const numbers = Array.from(Array(32).keys());

  return (
    <div>
      <p className="text-center font-mono">Number Generator</p>
      <div className="grid grid-cols-8">
        {numbers.map((number) => (
          <Block number={number} key={number} />
        ))}
      </div>
    </div>
  );
};

const HexadecimalColors = () => {
  const colors = Array.from(Array(32), () => hexaColor());

  return (
    <div>
      <p className="text-center font-mono">Hexadecimal Generator</p>
      <div className="grid grid-cols-8">
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: color }}
            className="text-center p-2 text-white border-white border"
            key={index}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

const Population = ({ country, population }) => {
  const percentage = Math.trunc((population / totalPopulation) * 100);

  return (
    <div className="flex flex-row gap-2 border border-white" key={index}>
      <div className="w-1/6">{country}</div>
      <div className="w-4/6">
        <div
          style={{ width: `${percentage}%` }}
          className="bg-orange-500 rounded-md text-center"
        >
          {percentage}%
        </div>
      </div>
      <div className="w-1/6">{population}</div>
    </div>
  );
};

const WorldPopulation = () => {
  return (
    <div>
      <p className="text-center font-mono">World Population</p>
      <div className="flex flex-col">
        {worldPopulationEntries.map((worldPopulationEntry, index) => (
          <Population
            country={worldPopulationEntry.country}
            population={worldPopulationEntry.population}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default function index() {
  return (
    <div className="flex flex-col gap-4">
      <NumberGenerator />
      <HexadecimalColors />
      <WorldPopulation />
    </div>
  );
}
