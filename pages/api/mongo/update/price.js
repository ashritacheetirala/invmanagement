import { connectToDatabase } from "../../../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "GET") {
    const data = await db
      .collection("inventoryCollection")
      .find({})
      .limit(20)
      .toArray();
    //   console.log(data);

    res.json(data);
  } else if (req.method === "PUT") {
    const data = req.body.product;
    console.log(data);
    const result = await db.collection("inventoryCollection").updateOne({id: data.id}, {$set:{price:  data.price}})
    res.json(result)

  }
}
