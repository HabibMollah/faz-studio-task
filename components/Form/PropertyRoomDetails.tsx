import Input from "./Input";

export default function PropertyRoomDetails() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Property /Room Details
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Property Type"
          type="text"
          placeholder="e.g. Room Only"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Number of Bedrooms"
          type="number"
          placeholder="e.g. 3"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Number of Bathrooms"
          type="number"
          placeholder="e.g. 3"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Furnishing Options"
          type="text"
          placeholder="e.g. Not Furnished"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Area"
          type="text"
          placeholder="e.g. 1500 sqft"
        />
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="EPC Rating (Purchase EPC for $69)"
          type="number"
          placeholder="e.g. 23"
        />
      </div>
    </div>
  );
}
