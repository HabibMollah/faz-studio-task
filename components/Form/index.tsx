import { createElement } from "react";
import FormSection from "./FormSection";
import KeyFeatures from "./KeyFeatures";
import LocationAddress from "./LocationAddress";
import Package from "./Package";
import Preferences from "./Preferences";
import PropertyDescription from "./PropertyDescription";
import PropertyRent from "./PropertyRent";
import PropertyRoomDetails from "./PropertyRoomDetails";
import RelationshipToTheProperty from "./RelationshipToTheProperty";
import Schedules from "./Schedules";
import YoutubeURL from "./YoutubeURL";

const formSections = [
  PropertyRoomDetails,
  KeyFeatures,
  LocationAddress,
  YoutubeURL,
  PropertyRent,
  PropertyDescription,
  Preferences,
  RelationshipToTheProperty,
  Schedules,
  Package,
];

export default function Form() {
  return (
    <section className="mx-auto max-w-[1344px]">
      <form>
        {formSections.map((section, index) => (
          <FormSection key={index}>{createElement(section)}</FormSection>
        ))}
      </form>
    </section>
  );
}
