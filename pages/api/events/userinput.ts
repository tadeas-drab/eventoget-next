// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchByUserInput } from '../../../data-provider/events/FetchByUserInput'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let userInput = req.query['input'];
    res.status(200).json(await fetchByUserInput(userInput))
}
