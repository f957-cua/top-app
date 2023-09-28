import { Metadata } from "next";
import getMenu from "@/api/menu";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Product page',
  };
}

export async function generateStaticParams(): Promise<{webPage: string}[]> {
  const menu = await getMenu(0);
  return menu.map(item => ({webPage: item._id.secondCategory}));
}

export default function Courses(): JSX.Element {
  return (
      <>
        <h1>Course from alias web app</h1>
      </>
  );
}