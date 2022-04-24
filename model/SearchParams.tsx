import { Seats } from "./Seats"

export interface SearchParams {
    flyFrom_type: string
    to_type: string
    seats: Seats
  }