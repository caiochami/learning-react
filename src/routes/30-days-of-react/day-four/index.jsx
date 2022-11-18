import React from "react";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

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
