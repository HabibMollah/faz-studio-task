import { Switch } from "../ui/switch";

type Props = {
  label: string;
  className?: string;
};
export default function CheckboxWithSwitch({ label, className }: Props) {
  return (
    <div className="flex max-w-[312px] flex-row justify-between gap-2 bg-white px-8 py-4 lg:flex-row">
      <p className="text-sm font-[700] text-black">{label}</p>
      {/* <div className={`w-full px-6 py-4 text-xl ${className}`}></div> */}
      <Switch />
    </div>
  );
}
