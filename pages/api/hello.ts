// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArrivalLocation } from "../../data_provider/kiwi/fetchArrivalLocation";
import { fetchFlights } from "../../data_provider/kiwi/fetchFlights";
import { Flight } from "../../model/Flight";

const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  apikey: "Yv-HrUbVowJVkKPzG50xncA4C-mATFkl",
};

async function getFlights(
  flyFrom: string,
  flyTo: string,
  dateFrom: string,
  dateTo: string,
  returnFrom: string,
  returnTo: string
) {
  try {
    const response = await axios.get(
      `https://tequila-api.kiwi.com/v2/search?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${dateFrom}&date_to=${dateTo}&return_from=${returnFrom}&return_to=${returnTo}&flight_type=round&adults=1&vehicle_type=aircraft&sort=duration&limit=10`,
      config
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
  // getFlights(
  //   "KSC",
  //   "PRG",
  //   "06/05/2022",
  //   "06/05/2022",
  //   "09/05/2022",
  //   "09/05/2022"
  // );

  const arrivalLocation = await fetchArrivalLocation("50.073658", "14.418540"); // Prague coordinates
  console.log(arrivalLocation);
  const flights:Flight | undefined = await fetchFlights("KSC", arrivalLocation, "06/05/2022", "09/05/2022");
  console.log(flights?.data[0]);
}
