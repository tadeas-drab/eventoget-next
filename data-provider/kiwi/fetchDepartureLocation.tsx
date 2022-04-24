const axios = require("axios").default;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  apikey: "Yv-HrUbVowJVkKPzG50xncA4C-mATFkl",
};

export const fetchDepartureLocation = async (userInput: string) => {
  try {
    const response = await axios.get(
      `https://tequila-api.kiwi.com/locations/query?term=${userInput}&locale=en-US&location_types=airport&limit=10&active_only=true`,
      config
    );
    const result = [];
    for (let i = 0; i < response.data.results_retrieved; i++) {
      result.push([
        response.data.locations[i].id,
        response.data.locations[i].name,
      ]);
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
