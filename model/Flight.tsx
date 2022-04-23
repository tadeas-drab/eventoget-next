export interface Flight {
    search_id: string
    currency: string
    data: Data[]
    _results: number
    search_params: SearchParams
    all_airlines: any[]
    all_stopover_airports: any[]
  }

  export interface SearchParams {
    flyFrom_type: string
    to_type: string
    seats: Seats
  }
  
  export interface Seats {
    passengers: number
    adults: number
    children: number
    infants: number
  }

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

  export interface CountryFrom {
    code: string
    name: string
  }
  
  export interface CountryTo {
    code: string
    name: string
  }

  export interface Conversion {
    EUR: number
  }

  export interface BagsPrice {
    "1": number
    "2"?: number
  }

  export interface Availability {
    seats: number
  }