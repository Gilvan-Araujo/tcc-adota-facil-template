import faunadb from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.FAUNADB_SECRET_KEY || ''
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const formData = req.body

  try {
    const dbs: { data: any } = await client.query(
      q.Create(q.Collection('Pets'), {
        data: formData
      })
    )

    res.status(200).json(dbs.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
