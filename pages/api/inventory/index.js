import { inventory } from "../../../data/inventory";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(inventory);
  } else if (req.method === "POST") {
    const product = req.body.product;
    const newProduct = {
      id: product.id,
      name: product.name,
      model: product.model,
      price: product.price,
      manufacturer: product.manufacturer,
      type: product.type,
      quantity: product.quantity,
      location: product.location,
    };
    inventory.push(newProduct);
    res.status(201).json(newProduct);
  }
}
