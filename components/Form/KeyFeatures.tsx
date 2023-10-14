import Input from "./Input";

export default function KeyFeatures() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Key Features
      </h2>
      <div className="grid w-full max-w-[656px] grid-cols-1 gap-8 !font-bold sm:grid-cols-2">
        <Input
          type="text"
          disabled
          className="!text-sm shadow-[0px_16px_40px_-7px_#0000000d] disabled:bg-white"
          value={"Bills Included"}
        />
        <Input
          type="text"
          disabled
          className="!text-sm shadow-[0px_16px_40px_-7px_#0000000d] disabled:bg-white"
          value={"Garden Access"}
        />
        <Input
          type="text"
          disabled
          className="!text-sm shadow-[0px_16px_40px_-7px_#0000000d] disabled:bg-white"
          value={"Parking"}
        />
        <Input
          type="text"
          disabled
          className="!text-sm shadow-[0px_16px_40px_-7px_#0000000d] disabled:bg-white"
          value={"Lift"}
        />
        <Input
          type="text"
          disabled
          className="!text-sm shadow-[0px_16px_40px_-7px_#0000000d] disabled:bg-white"
          value={"Fireplace"}
        />
      </div>
    </div>
  );
}
