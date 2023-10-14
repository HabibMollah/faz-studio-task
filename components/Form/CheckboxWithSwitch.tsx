import { Switch } from "../ui/switch";

type Props = {
  label: string;
  className?: string;
};
export default function CheckboxWithSwitch({ label, className }: Props) {
  return (
    <div className="flex max-h-[48px] max-w-[312px] flex-row items-center justify-between gap-2 bg-white px-8 py-4 shadow-[0px_16px_40px_-7px_#0000000d] lg:flex-row">
      <p className="text-sm font-[700] text-black">{label}</p>
      <Switch />
    </div>
  );
}
