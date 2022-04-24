import { SearchParams } from "./SearchParams"
import { Data } from "./Data"

export interface Flight {
    search_id: string
    currency: string
    data: Data[]
    _results: number
    all_airlines: any[]
  }