'use client';
import {SearchProps} from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import {Button} from '../Button/Button';
import {useState} from 'react';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/navigation';

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = (): void => {
        router.push('/search');
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code == 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(styles.search, className)}
        {...props}
        >
            <Input 
                placeholder='Search...'
                className={styles.input}
                value={search}
                onChange={(e): void => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button appearance='primary' className={styles.button} onClick={goToSearch}>
                <GlassIcon />
            </Button>
        </div>
    );
};