import getMenu from '@/api/menu';
import {notFound} from 'next/navigation';

import MenuClient from '@/components/MenuClient/MenuClient';


export default async function Menu ():Promise<JSX.Element> {
    const firstCategory = 0;
    const menu = await getMenu(firstCategory);
    if (!menu) return notFound();

    return (
        <MenuClient clientMenu={menu} />
    );
}