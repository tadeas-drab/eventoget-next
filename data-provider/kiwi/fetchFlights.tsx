import { Flight } from "../../model/Flight";

const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  apikey: process.env.KIWI_APIKEY,
}

export const fetchFlights = async (flyFrom: string, flyTo: string, departureDate: string, arrivalDate: string): Promise<Flight[]> => {
  try {
    const response = await axios.get(
      `https://tequila-api.kiwi.com/v2/search?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${departureDate}&date_to=${departureDate}&return_from=${arrivalDate}&return_to=${arrivalDate}&flight_type=round&adults=1&vehicle_type=aircraft&sort=duration&limit=10`,
      config
    );
    let json = response.data;
    json = Array.of(JSON.parse(JSON.stringify(json)))
    return json;
  } catch (error) {
    console.log("Error");
    console.error(error);
    return []
  }
}