import { CountryFrom } from "./CountryFrom"
import { CountryTo } from "./CountryTo"
import { Conversion } from "./Conversion"
import { BagsPrice } from "./BagsPrice"
import { Availability } from "./Availability"

export interface Data {
    id: string
    flyFrom: string
    flyTo: string
    cityFrom: string
    cityCodeFrom: string
    cityTo: string
    cityCodeTo: string
    countryFrom: CountryFrom
    countryTo: CountryTo
    distance: number
    price: number
    conversion: Conversion
    bags_price: BagsPrice
    availability: Availability
    airlines: string[]
    booking_token: string
    deep_link: string
    local_arrival: string
    utc_arrival: string
    local_departure: string
    utc_departure: string
  }