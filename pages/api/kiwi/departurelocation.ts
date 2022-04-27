import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import { fetchDepartureLocation } from '../../../data-provider/kiwi/FetchDepartureLocation';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let input = req.query['input'].toString();
    res.status(200).json(await fetchDepartureLocation(input))
}