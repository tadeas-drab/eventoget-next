// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArrivalLocation } from "../../data-provider/kiwi/FetchArrivalLocation";
import { fetchFlights } from "../../data-provider/kiwi/FetchFlights";
import { Flight } from "../../model/Flight";
import { Data } from "../../model/Data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const arrivalLocation = await fetchArrivalLocation("50.073658", "14.418540"); // Prague coordinates
  console.log(arrivalLocation);

  let flights: Array<Flight> = await fetchFlights(
    "KSC",
    arrivalLocation,
    "06/05/2022",
    "09/05/2022"
  );

  res.status(200).json(flights);

  // const departureLocation = await fetchDepartureLocation("Kos");
  // console.log(departureLocation);

  // res.status(200).json(await fetchLocations());
}
