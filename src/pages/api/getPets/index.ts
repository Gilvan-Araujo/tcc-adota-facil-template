import faunadb from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.FAUNADB_SECRET_KEY || ''
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dbs: { data: any } = await client.query(
      q.Map(q.Paginate(q.Match(q.Index('all_pets'))), (ref: any) => q.Get(ref))
    )

    res.status(200).json(
      dbs.data.map((x: { data: any; ref: { id: any } }) => ({
        ...x.data,
        id: x.ref.id
      }))
    )
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
