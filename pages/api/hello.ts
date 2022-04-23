// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
  getFlights(
    "KSC",
    "PRG",
    "06/05/2022",
    "06/05/2022",
    "09/05/2022",
    "09/05/2022"
  );
}
