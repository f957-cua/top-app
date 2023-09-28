import getMenu from "@/api/menu";
import getPage from "@/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Page products',
    };
}

export async function generateStaticParams(): Promise<{alias: string}[]> {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProducts({params}: {params: {alias: string}}): Promise<JSX.Element> {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  return (
      <>
        <h1>Product alias {params.alias}</h1>
        <h2>{page.title}</h2>
      </>
  );
}