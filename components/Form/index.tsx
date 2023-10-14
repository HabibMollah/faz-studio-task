import KeyFeatures from "./KeyFeatures";
import LocationAddress from "./LocationAddress";
import PropertyRoomDetails from "./PropertyRoomDetails";

export default function Form() {
  return (
    <section className="mx-auto max-w-[1344px]">
      <form>
        <PropertyRoomDetails />
        <KeyFeatures />
        <LocationAddress />
      </form>
    </section>
  );
}
