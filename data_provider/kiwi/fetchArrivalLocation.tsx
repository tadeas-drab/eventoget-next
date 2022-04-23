const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  apikey: "Yv-HrUbVowJVkKPzG50xncA4C-mATFkl",
}

export const fetchArrivalLocation = async(latitude: string, longitude: string, radius: string = "500") => {
    try {
        const response = await axios.get(
          `https://tequila-api.kiwi.com/locations/radius?lat=${latitude}&lon=${longitude}&radius=${radius}&locale=en-US&location_types=airport&limit=1&active_only=true`,
          config
        );
        return response.data.locations[0].code;
      } catch (error) {
        console.error(error);
      }
}