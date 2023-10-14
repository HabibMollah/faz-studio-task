"use client";
import { useState } from "react";
import Input from "./Input";
import CheckboxWithSwitch from "./CheckboxWithSwitch";

export default function Preferences() {
  const [maxTenants, setMaxTenants] = useState(2);
  const numbers = [1, 2, 3, 4, 5, 6];
  const lastNumber = numbers[numbers.length - 1];
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <span className="flex flex-col gap-8">
        <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
          Preferences
        </h2>
        <p className="max-w-[310px] text-base">
          Please tell us about who can apply for your property.
        </p>
      </span>
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full">
          <Input
            className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
            label="Minimum Tenancy Length"
            type="text"
            placeholder="e.g. 4 months"
          />
        </div>
        <div>
          <p className="text-sm font-[700]">Maximum Number of Tenants</p>
          <div className="flex gap-8 py-4">
            {numbers.map((number) => (
              <button
                type="button"
                key={number}
                className={`w-[82.66px] p-4 text-sm font-bold shadow-[0px_16px_40px_-7px_#0000000d] duration-700 ${
                  maxTenants === number ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setMaxTenants(number)}
              >
                {number}
                {number === lastNumber ? "+" : ""}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <Input
            className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
            label="Earliest Move In Date"
            type="date"
            defaultValue="2023-07-25"
          />
        </div>
        <div className="grid w-full max-w-[656px] grid-cols-1 gap-8 !font-bold sm:grid-cols-2">
          <CheckboxWithSwitch label="Bills Included" />
          <CheckboxWithSwitch label="Parking Included" />
          <CheckboxWithSwitch label="Family" />
          <CheckboxWithSwitch label="Smokers" />
          <CheckboxWithSwitch label="Rent Included" />
        </div>
      </div>
    </div>
  );
}
