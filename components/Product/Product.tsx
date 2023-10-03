import {ProductProps} from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '@/components/Rating/Rating';
import {Tag} from '@/components/Tag/Tag';
import { Button } from '..';
import { priceUa } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceUa(product.price)}
                {product.oldPrice && <Tag color='green' className={styles.oldPrice}>{priceUa(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>{priceUa(product.credit)}/<span className={styles.month}>month</span></div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tag}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
            <div className={styles.priceTitle}>price</div>
            <div className={styles.creditTitle}>credit</div>
            <div className={styles.rateTitle}>{product.reviewCount} reviews</div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Advantages</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Disadvantages</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
                <Button appearance='primary'>View more</Button>
                <Button appearance='ghost' arrow={'right'} className={styles.reviewBtn}>Read reviews</Button>
            </div>
        </Card>
    );
};