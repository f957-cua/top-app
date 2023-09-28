import { HeaderElementProps } from './HeaderElement.props';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({...props}: HeaderElementProps): JSX.Element => {
    return (
        <div
        className={cn(styles.header)}
        {...props}
        >
            Header
        </div>
    );
};