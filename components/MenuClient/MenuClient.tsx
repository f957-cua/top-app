'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './MenuClient.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';

export default function MenuClient ({clientMenu}: {clientMenu: MenuItem[]}): JSX.Element {
    const [menu, setMenu] = useState(clientMenu);
    const firstCategory = 0;
    const pathName = usePathname();

    const openSecondLevel = (secondCategory: string): void => {
        menu && setMenu(() => menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = (): JSX.Element => {
        return (<>
            {firstLevelMenu.map(m => (
                <div key={m.route}>
                    <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                    </Link>
                    {m.id == firstCategory && buildSecondLevel(m)}
                </div>
            ))}
        </>);
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    return (
                    <div key={m._id.secondCategory}>
                        <div 
                            className={styles.secondLevel} 
                            onClick={(): void => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
                    </div>
                );
            })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
        return (
        <>
            {pages.map(p => (
                <Link href={`/${route}/${p.alias}`} key={p.title} className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathName
                    })}>
                        {p.category}
                </Link>
        ))}
        </>
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}