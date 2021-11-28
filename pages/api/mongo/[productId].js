import { connectToDatabase } from "../../../util/mongodb";

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
  } else if (req.method === "DELETE") {
    const data = req.query.productId;
    console.log(data);
    const result = await db.collection("inventoryCollection").deleteOne({id : data});
    // console.log("res", res);
    // console.log("result", result);
    res.json(result);   
  } else if (req.method === "PUT") {
    const data = req;
    console.log(data)
  }
}
