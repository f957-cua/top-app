import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)}
        {...props}>
            <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} all rights defended</span>
            <a href='#' target='_blank'>User agreement</a>
            <a href='#' target='_blank'>Confident politics</a>
        </footer>
    );
};