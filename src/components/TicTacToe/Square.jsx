import React from "react";
import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  return (
    <div
      className="border text-center cursor-pointer h-15 w-15"
      onClick={() => setValue("X")}
    >
      {value}
    </div>
  );
}
