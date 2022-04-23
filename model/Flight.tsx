import { SearchParams } from "./SearchParams"
import { Data } from "./Data"

export interface Flight {
    search_id: string
    currency: string
    data: Data[]
    _results: number
    search_params: SearchParams
    all_airlines: any[]
    all_stopover_airports: any[]
  }