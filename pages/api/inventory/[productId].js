import { inventory } from "../../../data/inventory";

export default function handler(req, res) {
  const { productId } = req.query;

  if (req.method === "GET") {
    const product = inventory.find(
      (product) => product.id === parseInt(productId)
    );
    res.status(200).json(product);
  } else if (req.method === "DELETE") {
    const deletedProduct = inventory.find(
      (product) => product.id === parseInt(productId)
    );

    const index = inventory.findIndex(
      (product) => product.id === parseInt(productId)
    );
    inventory.splice(index, 1);
    res.status(200).json(deletedProduct);
  }
}
