// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { executeQuery } from '../../lib/mysqlDb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let row = await executeQuery("SELECT * from events limit 2", null);
  console.log(row)
  res.status(200).json(row)
}
