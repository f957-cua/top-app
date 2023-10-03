import getMenu from "@/api/menu";
import getPage from "@/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";
import { TopPageComponent } from "@/page-components/TopPageComponent/TopPageComponent";
import getProduct from "@/api/product";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Page courses',
    };
}

export async function generateStaticParams(): Promise<string[]> {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const menu = await getMenu(0);
    paths = paths.concat(menu.flatMap(item => item.pages.map(page => (`/${m.route}/${page.alias}`))));
  }
  return paths;
}

export default async function TopPage({params}: {params: {alias: string}}): Promise<JSX.Element> {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  const products = await getProduct({category: page.category, limit: 10});
  if (!products) {
    notFound();
  }
  return (
      <>
        <TopPageComponent page={page} firstCategory={0} products={products} />
      </>
  );
}