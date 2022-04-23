// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArrivalLocation } from "../../data-provider/kiwi/fetchArrivalLocation";
import { fetchFlights } from "../../data-provider/kiwi/fetchFlights";
import { Flight } from "../../model/Flight";
import { fetchLocations } from "../../data-provider/events/FetchLocations";
import { fetchDepartureLocation } from "../../data-provider/kiwi/fetchDepartureLocation";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ name: "John Doe" });

  const arrivalLocation = await fetchArrivalLocation("50.073658", "14.418540"); // Prague coordinates
  console.log(arrivalLocation);

  const flights: Flight | undefined = await fetchFlights(
    "KSC",
    arrivalLocation,
    "06/05/2022",
    "09/05/2022"
  );
  console.log(flights?.data[0]);

  // const departureLocation = await fetchDepartureLocation("Kos");
  // console.log(departureLocation);

  // res.status(200).json(await fetchLocations());
}
