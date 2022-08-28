import createClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-expect-error
import readTitle from 'read-title'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: _id } = req.query
  const id = Array.isArray(_id) ? _id[0] : _id

  try {
    const client = createClient({
      projectId: process.env.SANITY_API_PROJECT_ID,
      dataset: process.env.SANITY_API_DATASET,
      apiVersion: '2022-07-10',
      useCdn: false,
      token: process.env.SANITY_API_WRITE_TOKEN,
    })
    const url = await client.fetch(/* groq */ `*[ _id == $id ][0].url`, {
      id,
    })
    const title = await readTitle(url)
    await client.patch(id!).set({ title }).commit()

    return res.status(200).json({ message: 'success!' })
  } catch (err: any) {
    return res.status(500).json({ message: err?.message })
  }
}
