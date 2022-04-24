// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchFlights } from '../../../data-provider/kiwi/FetchFlights'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let flyFrom = req.query['flyFrom'].toString();
    let flyTo = req.query['flyTo'].toString();
    let departureDate = req.query['departureDate'].toString();
    let arrivalDate = req.query['arrivalDate'].toString();
    res.status(200).json(await fetchFlights(flyFrom, flyTo, departureDate, arrivalDate))
}
