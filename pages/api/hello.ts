// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArrivalLocation } from "../../data-provider/kiwi/fetchArrivalLocation";
import { fetchFlights } from "../../data-provider/kiwi/fetchFlights";
import { Flight } from "../../model/Flight";
import { Data } from "../../model/Data";
import { fetchLocations } from "../../data-provider/events/FetchLocations";
import { fetchDepartureLocation } from "../../data-provider/kiwi/fetchDepartureLocation";
import { type } from "os";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ name: "John Doe" });

  const arrivalLocation = await fetchArrivalLocation("50.073658", "14.418540"); // Prague coordinates
  console.log(arrivalLocation);

  const flights: Flight[] | undefined = await fetchFlights(
    "KSC",
    arrivalLocation,
    "06/05/2022",
    "09/05/2022"
  );
  // console.log(flights);
  console.log(typeof flights);

  const map1 = flights?.map((flight): Flight => {
    const datas = flight.data.map((data): Data => {
      return {
        id: data.id,
        flyFrom: data.flyFrom,
        flyTo: data.flyTo,
        cityFrom: data.cityFrom,
        cityCodeFrom: data.cityCodeFrom,
        cityTo: data.cityTo,
        cityCodeTo: data.cityCodeTo,
        countryFrom: data.countryFrom,
        countryTo: data.countryTo,
        distance: data.distance,
        price: data.price,
        airlines: data.airlines,
        booking_token: data.booking_token,
        deep_link: data.deep_link,
        local_arrival: data.local_arrival,
        utc_arrival: data.utc_arrival,
        local_departure: data.local_departure,
        utc_departure: data.utc_departure,
      };
    });
    return {
      search_id: flight.search_id,
      currency: flight.currency,
      data: datas,
      _results: flight._results,
      all_airlines: flight.all_airlines,
    };
  });

  console.log(map1);

  // const departureLocation = await fetchDepartureLocation("Kos");
  // console.log(departureLocation);

  // res.status(200).json(await fetchLocations());
}
