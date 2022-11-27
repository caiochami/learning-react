import React from "react";

export default function DayTen() {
  return (
    <div className="h-96 gap-2 flex flex-col sm:flex-row relative w-full">
      <div className="absolute h-full w-full sm:flex hidden">
        <div className="border-t-4 border-l-4 border-gray-400 w-10 h-10 mt-2 ml-2"></div>
        <div style={{ fontSize: 72 }} className="font-bold self-end">
          Portifolio
        </div>
        <div className="border-b-4 border-r-4 border-gray-400 w-10 h-10 mb-2 -mr-6 self-end"></div>
      </div>
      <div className="bg-yellow-500 h-full sm:w-6/12"></div>
      <div className="sm:w-6/12 text-right">
        <div className="text-2xl font-bold uppercase">Caio Chami</div>
        <div className="text-lg font-medium mb-6">Software Developer</div>
        <ul>
          <li className="text-gray-500">caio.chami@devsquad.com</li>
          <li className="text-gray-500">devsquad.com</li>
          <li className="text-gray-500">North Street Avenue</li>
        </ul>
      </div>
    </div>
  );
}
