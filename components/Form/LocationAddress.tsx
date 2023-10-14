import Input from "./Input";

export default function LocationAddress() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Location & Address
      </h2>
      <div className="grid w-full max-w-[312px] grid-cols-1 gap-8">
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Address line 1"
          type="number"
          placeholder="e.g. 23"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Address line 2"
          type="number"
          placeholder="e.g. 23"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Town"
          type="text"
          placeholder="e.g. London"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Flat/House Number (kept private)"
          type="number"
          placeholder="e.g. 23"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Post Code"
          type="number"
          placeholder="e.g. 23"
        />
      </div>
    </div>
  );
}
