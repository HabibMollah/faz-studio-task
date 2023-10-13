import KeyFeatures from "./KeyFeatures";
import PropertyRoomDetails from "./PropertyRoomDetails";

export default function Form() {
  return (
    <section className="mx-auto max-w-[1344px]">
      <form>
        <PropertyRoomDetails />
        <KeyFeatures />
      </form>
    </section>
  );
}
