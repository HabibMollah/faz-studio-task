import Input from "../Input";

export default function PropertyRent() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Property /Room Details
      </h2>
      <div className="grid w-full max-w-[656px] grid-cols-1 gap-8 sm:grid-cols-2">
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Monthly Rent"
          type="number"
          placeholder="e.g. £3211"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Weekly Rent"
          type="number"
          placeholder="e.g. £32"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Deposit Amount"
          type="number"
          placeholder="e.g. £3211"
        />
      </div>
    </div>
  );
}
