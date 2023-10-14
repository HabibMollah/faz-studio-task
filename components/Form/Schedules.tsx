import Input from "./Input";

export default function Schedules() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <span className="flex flex-col gap-8">
        <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
          Schedules
        </h2>
        <p className="max-w-[310px] text-base">
          Click on an empty box to assign a schedule slot
        </p>
      </span>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3"></div>
    </div>
  );
}
