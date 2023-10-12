import Icon from "./Icon";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 w-screen bg-[#f7f7f7] px-4 py-3 font-bold text-black">
      <nav className="mx-auto flex max-w-[1344px] items-center">
        {/* Cancel button */}
        <button className="flex items-center gap-4 border border-[#4B4B4B] bg-white p-4">
          <Icon variant="cross.svg" />
          <span className="sr-only">Cancel/Close</span>
        </button>
        {/* Text contents */}
        <div className="flex justify-evenly text-xl">
          <p className="px-8">Preview listing</p>
          <p className="px-8">150/12 Orchard Cottage, London 56273</p>
        </div>
        {/* Right side buttons */}
        <div className="ml-auto flex gap-4">
          <button className="flex items-center gap-4 border border-[#4B4B4B] bg-white p-4">
            <Icon variant="copy.svg" />
            Save draft
          </button>
          <button className="flex items-center gap-4 bg-white p-4 shadow-[0px_16px_40px_-7px_#00000005]">
            Edit
            <Icon variant="edit.svg" />
          </button>
          <button className="flex items-center gap-4 bg-black p-4 text-white">
            Publish
            <Icon variant="chevron-right.svg" />
          </button>
        </div>
      </nav>
    </header>
  );
}
