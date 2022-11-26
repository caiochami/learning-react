import { ArrowPathIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import React, { Suspense, useState } from "react";
import fetchData from "../../../utils/fetchData";
import Button from "../../Button";

const apiData = fetchData("https://dog.ceo/api/breeds/image/random/50");

export default function DayNine() {
  const [data, setData] = useState(apiData.read());

  const shuffleData = () => {
    const shuffledData = _.shuffle(data.slice());

    setData(shuffledData);
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>
        <Button title="Shuffle" onClick={shuffleData}>
          <ArrowPathIcon className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.map((item, index) => (
          <img
            alt={`gallery-img-${index + 1}`}
            src={item}
            className="w-16 h-16"
            key={`gallery-${index + 1}`}
          />
        ))}
      </div>
    </Suspense>
  );
}
