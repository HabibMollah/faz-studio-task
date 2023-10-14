export default function Package() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] lg:flex-row">
      <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
        Package
      </h2>
      <div className="grid w-full grid-cols-1 gap-8">
        <div className="max-h-[549px] w-full max-w-[427px] bg-white p-6">
          {/* Heading */}
          <div className="flex justify-between text-2xl font-bold">
            <p>Landlord Pro+</p>
            <p>Most Popular</p>
          </div>
          {/* Price */}
          <div className="flex items-center gap-1 py-6">
            <p className="text-[40px] font-bold">£69</p>
            <p>+VAT</p>
          </div>
          {/* List */}
          <ul className="flex list-disc flex-col gap-4 pl-5">
            <li>90 Days Advertising on NextMoov</li>
            <li>90 Days Advertising on Rightmove</li>
            <li>
              Landlords dashboard to manage all enquiries and contact via
              dashboard
            </li>
            <li>Viewing Organiser</li>
            <li>Managing Tenancy Offers</li>
            <li>Tenant Comparison and Selection</li>
            <li>Tenant Referencing Forms</li>
            <li>
              Contract Drafting, Digital Signature & Contract Management with
              DocuSign
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
