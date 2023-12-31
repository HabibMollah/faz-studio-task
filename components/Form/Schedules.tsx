"use client";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1NpR2FGfV5yd0VEal1TTnZWUj0eQnxTdEZiWX5bcXBURGBVVUR0XA==",
);

export default function Schedules() {
  return (
    <div className="flex flex-col gap-8 pb-[61px] pt-[30px] lg:flex-row">
      <span className="flex flex-col gap-8">
        <h2 className="min-w-[312px] text-2xl font-bold tracking-[0.24px]">
          Schedules
        </h2>
        <p className="max-w-[310px] text-base">
          Click on an empty box to assign a schedule slot
        </p>
      </span>
      <div className="max-h-[683px] overflow-y-scroll">
        <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
}
