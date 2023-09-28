'use client';
import {Fragment, useState, useEffect, KeyboardEvent} from 'react';
import { RatingProps } from './RatingElement.props';
import StarIcon from '../../public/star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]> (new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                        })}
                    onMouseEnter={(): void => changeDisplay(i + 1)}
                    onMouseLeave={(): void => changeDisplay(rating)}
                    onClick={(): void => onClick(i + 1)}
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>): void => handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedRating);
    };

    const changeDisplay = (rating: number): void => {
        if (!isEditable || !setRating) {
            return;
        }
        constructRating(rating);
    };

    const onClick = (i: number): void => {
        if (!isEditable || !setRating) return;
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
        if (!isEditable || e.code != 'Space' || !setRating) return;
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r , i) => <Fragment key={i}>{r}</Fragment>)}
        </div>
    );
};