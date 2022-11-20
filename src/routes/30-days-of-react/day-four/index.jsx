import React from "react";
import { hexaColor } from "../../../utils/helpers";

const Block = () => {
  const color = hexaColor();

  return (
    <div
      style={{ backgroundColor: color }}
      className="text-center p-2 text-white border-white border-t border-b"
    >
      {color}
    </div>
  );
};

export default function index() {
  return (
    <div className="flex flex-col">
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  );
}
