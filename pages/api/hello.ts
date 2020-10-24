import { NextApiRequest , NextApiResponse } from "next"
import {connectToDatabase} from "../../util/mogodb"

export default async (req : NextApiRequest, res : NextApiResponse) => {
  const {db} = await connectToDatabase();

  const getUser = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.statusCode = 200
  res.json(getUser);

  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  // res.json(req.query)
}
