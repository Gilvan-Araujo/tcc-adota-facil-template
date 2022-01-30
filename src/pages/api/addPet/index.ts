export {}

const faunadb = require('faunadb')

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req: any, res: any) => {
  const formData = req.body

  try {
    const dbs = await client.query(
      q.Create(q.Collection('Pets'), {
        data: {
          name: formData.name,
          type: formData.type
        }
      })
    )

    res.status(200).json(dbs.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
