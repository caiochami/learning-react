import _ from "lodash";
import React, { useState } from "react";
import { classNames } from "../../../utils/helpers";

export default function DayEleven() {
  const [blocks, setBlocks] = useState(() => {
    let blocks = Array.from(Array(20), () => false);

    blocks[0] = true;

    return _.shuffle(blocks);
  });

  function handleMouseEnter(marked) {
    if (!marked) {
      return;
    }
    setBlocks(_.shuffle(blocks));
  }

  return (
    <div className="flex flex-wrap">
      {blocks.map((marked, index) => (
        <div
          onMouseEnter={() => handleMouseEnter(marked)}
          className={classNames(
            "h-32 w-1/4 border",
            marked ? "bg-blue-400" : "bg-gray-100"
          )}
          key={index}
        ></div>
      ))}
    </div>
  );
}
