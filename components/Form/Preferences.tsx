"use client";
import { useState } from "react";
import Input from "./Input";

export default function Preferences() {
  const [maxTenants, setMaxTenants] = useState(2);
  const numbers = [1, 2, 3, 4, 5, 6];
  const lastNumber = numbers[numbers.length - 1];
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Property /Room Details
      </h2>
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
      </div>
    </div>
  );
}
