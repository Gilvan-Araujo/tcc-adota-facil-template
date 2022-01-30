const faunadb = require('faunadb')

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req: any, res: any) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('all_pets'))),
        (ref: any) => q.Get(ref)
        // q.Lambda('x', q.Get(q.Var('x')))
      )
    )

    res.status(200).json(dbs.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
