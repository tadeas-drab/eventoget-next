// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchEvent } from '../../../data-provider/events/FetchEvent'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let id = req.query['id'];

    res.status(200).json(await fetchEvent(id))
}