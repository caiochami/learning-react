import _ from "lodash";
import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import countries from "../../../../data/30DaysOfReact/countries.json";
import Button from "../../Button";

export default function CountrySelector() {
  const [country, setCountry] = useState(_.sample(countries));

  const currencies = Object.values(country.currencies ?? []).map(
    (currency) => currency.name
  );

  const handleClick = () => {
    setCountry(_.sample(countries));
  };

  return (
    <div className="flex flex-col gap-6 shadow-lg p-2 max-w-lg bg-white">
      <img
        className="object-cover h-48 w-96 self-center shadow-lg"
        src={country.flags.svg}
        alt={country.name}
      />
      <div className="font-bold uppercase text-center text-lg">
        {country.name.common}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <ul className="overflow-x-auto">
          <li>Capital {country.capital}</li>
          <li>Languages: {Object.values(country.languages).join(",")}</li>
          <li>Population: {Intl.NumberFormat().format(country.population)}</li>
          <li>Currencies: {currencies.join(", ")}</li>
        </ul>
        <div>
          <Button className="justify-center" onClick={handleClick}>
            <ArrowPathIcon className="text-white w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
