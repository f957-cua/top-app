import API from "@/app/api";
import { ProductModel } from "@/interfaces/product.interface";

async function getProduct(obj: {category: string, limit?: number}): Promise<ProductModel[] | null> {
    const res = await fetch(API.product.find, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
          'content-type': 'application/json'
        })
      });
      return res.json();
}

export default getProduct;