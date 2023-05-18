import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      // const res = await fetch(`https://76-doctors-portal-server.vercel.app/appointmentOptions?date=${date}`);

      // আপডেট ভার্সনের জন্য
      const res = await fetch(
        `https://76-doctors-portal-server.vercel.app/vs/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Appointment on {format(selectedDate, "PP")}{" "}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOptions
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
