import { Flight } from "../../model/Flight";

const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  apikey: "Yv-HrUbVowJVkKPzG50xncA4C-mATFkl",
}

export const fetchFlights = async(flyFrom: string, flyTo: string, departureDate: string, arrivalDate: string): Promise<Flight | undefined> => {
    try {
        const response = await axios.get(
          `https://tequila-api.kiwi.com/v2/search?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${departureDate}&date_to=${departureDate}&return_from=${arrivalDate}&return_to=${arrivalDate}&flight_type=round&adults=1&vehicle_type=aircraft&sort=duration&limit=10`,
          config
        );
        const json = response.data;
        const flights: Flight = JSON.parse(JSON.stringify(json));
        return flights;
      } catch (error) {
        console.error(error);
      }
}