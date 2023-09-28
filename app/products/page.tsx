import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Product page',
  };
}


export default function Product(): JSX.Element {
  return (
      <>
        <h1>Product</h1>
      </>
  );
}