import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ success: true, data: 'HELLO' })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

