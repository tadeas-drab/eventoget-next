// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//@ts-ignore
import type { NextApiRequest, NextApiResponse } from 'next'
import fetchArrivalLoc from '../../../data-provider/kiwi/fetcharrivallocation';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let lat = req.query['lat'].toString();
    let lon = req.query['lon'].toString();
    res.status(200).json(await fetchArrivalLoc(lat, lon))
}