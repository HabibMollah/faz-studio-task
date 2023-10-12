import Icon from "./Icon";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 w-screen bg-[#f7f7f7] px-4 py-3 font-bold text-black">
      <nav className="mx-auto flex max-w-[1344px] items-center">
        {/* Cancel button */}
        <button className="flex items-center gap-4 border border-[#4B4B4B] bg-white p-1 lg:p-4">
          <Icon variant="cross.svg" />
          <span className="sr-only">Cancel/Close</span>
        </button>
        {/* Text contents */}
        <div className="ml-auto flex justify-evenly text-sm sm:ml-0 sm:text-lg lg:text-xl">
          <p className="px-2 lg:px-8">Preview listing</p>
          <p className="px-2 lg:px-8">150/12 Orchard Cottage, London 56273</p>
        </div>
        {/* Right side buttons */}
        <div className="ml-auto flex flex-col gap-4 text-xs lg:flex-row lg:text-base">
          <button className="flex items-center justify-center border border-[#4B4B4B] bg-white px-2 lg:gap-4 lg:p-4">
            <Icon variant="copy.svg" />
            Save draft
          </button>
          <button className="flex items-center justify-center bg-white px-2 shadow-[0px_16px_40px_-7px_#00000005] lg:gap-4 lg:p-4">
            Edit
            <Icon variant="edit.svg" />
          </button>
          <button className="flex items-center justify-center bg-black px-2 text-white lg:gap-4 lg:p-4">
            Publish
            <Icon variant="chevron-right.svg" />
          </button>
        </div>
      </nav>
    </header>
  );
}
