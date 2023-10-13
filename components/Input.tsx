type Props = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, type, placeholder }: Props) {
  return (
    <div className="flex max-w-[312px] flex-col gap-2">
      <label className="text-sm font-[700]" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full px-6 py-4 text-xl"
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
