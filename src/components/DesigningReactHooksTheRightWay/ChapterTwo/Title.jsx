import React, { useState } from "react";
import Changed from "./Changed";

export default function Title() {
  let [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <button
        className="w-24 bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-400"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span>
        Hello+
        <Changed count={count} />
      </span>
    </div>
  );
}
