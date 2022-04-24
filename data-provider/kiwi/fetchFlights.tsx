import { Data } from "../../model/Data";
import { Flight } from "../../model/Flight";

const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
    "apikey": process.env.KIWI_APIKEY
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
    let flights = response.data;
    flights = Array.of(JSON.parse(JSON.stringify(flights)))

    const map1 = flights.map((flight: Flight): Flight => {
      const datas = Object.values(flight?.data).map((data: Data): Data => {
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

    return map1;
  } catch (error) {
    console.log("Error");
    console.error(error);
    return []
  }
}