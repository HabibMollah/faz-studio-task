import Input from "./Input";

export default function YoutubeURL() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Add YouTube Share URL(Optional)
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        <span>
          <span className="relative">
            <Input
              className="shadow-[0px_28px_55px_-16px_#d3d4d42b]"
              label="URL"
              type="text"
              placeholder="e.g. www.youtube.com/"
            />
            <button className="absolute right-0 top-0 mt-[29px] h-[59px] bg-black p-4 text-sm font-bold text-white">
              Copy
            </button>
          </span>
          <p>Here you can add a link to a video of the property on youtube</p>
        </span>
      </div>
    </div>
  );
}
