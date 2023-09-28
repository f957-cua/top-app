import {ReactNode} from 'react';
import styles from './Template.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Template = ({children}: {children: ReactNode}): JSX.Element => {
    return (<div className={styles.wrapper}>
        <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.body}>
            {children}
        </div>
        <Footer className={styles.footer}/>
    </div>);
};

export default Template;