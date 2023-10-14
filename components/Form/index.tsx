import KeyFeatures from "./KeyFeatures";
import LocationAddress from "./LocationAddress";
import Preferences from "./Preferences";
import PropertyDescription from "./PropertyDescription";
import PropertyRent from "./PropertyRent";
import PropertyRoomDetails from "./PropertyRoomDetails";
import YoutubeURL from "./YoutubeURL";

export default function Form() {
  return (
    <section className="mx-auto max-w-[1344px]">
      <form>
        <PropertyRoomDetails />
        <KeyFeatures />
        <LocationAddress />
        <YoutubeURL />
        <PropertyRent />
        <PropertyDescription />
        <Preferences />
      </form>
    </section>
  );
}
