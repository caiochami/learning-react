import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { classNames } from "../../../utils/helpers";
import Button from "../../Button";
import CountrySelector from "./CountrySelector";

export default function DayEight() {
  const [isDaylight, setIsDaylight] = useState(true);

  const handleClick = () => {
    setIsDaylight(!isDaylight);
  };

  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center p-2 relative",
        isDaylight ? "bg-white" : "bg-gray-900"
      )}
    >
      <Button
        className="absolute right-0 top-0 mt-4 mr-4"
        color={isDaylight ? "warning" : "secondary"}
        onClick={handleClick}
      >
        {isDaylight ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </Button>
      <CountrySelector />
    </div>
  );
}
