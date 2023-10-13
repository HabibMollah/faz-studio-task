import Input from "./Input";

export default function Form() {
  return (
    <section className="mx-auto max-w-[1344px]">
      <form className="">
        {/* Property Room / Details */}
        <div className="flex gap-8 pb-[61px] pt-[30px]">
          <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
            Property /Room Details
          </h2>
          <div className="grid w-full grid-cols-3 gap-8">
            <Input
              label="Property Type"
              type="text"
              placeholder="e.g. Room Only"
            />
            <Input
              label="Number of Bedrooms"
              type="number"
              placeholder="e.g. 3"
            />
            <Input
              label="Number of Bathrooms"
              type="number"
              placeholder="e.g. 3"
            />
            <Input
              label="Furnishing Options"
              type="text"
              placeholder="e.g. Not Furnished"
            />
            <Input label="Area" type="text" placeholder="e.g. 1500 sqft" />
            <Input
              label="EPC Rating (Purchase EPC for $69)"
              type="number"
              placeholder="e.g. 23"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
