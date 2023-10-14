import Input from "./Input";

export default function RelationshipToTheProperty() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Property /Room Details
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        <Input
          className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
          label="Your relationship to the property"
          type="text"
          placeholder="e.g. Property Owner"
        />
      </div>
    </div>
  );
}
