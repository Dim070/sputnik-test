import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  img: string;
  firstName: string;
  lastName: string;
}

const Card: FC<Props> = ({ img, firstName, lastName }) => {
  const fullName = firstName + ' ' + lastName;
  return (
    <div className={styles.card}>
      <span className={styles.fullName}> {fullName}</span>
      <img className={styles.img} src={img} alt="collection img" />
    </div>
  );
};

export default Card;
