import React, { FC } from 'react';
import { INasa } from '../../models/INasa';
import styles from './styles.module.scss';

const NasaMain: FC<INasa> = ({ title, explanation, url }) => {
  return (
    <section className={styles.nasaMain}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{explanation}</p>
      <img src={url} className={styles.img} alt="nasaImg" />
    </section>
  );
};

export default NasaMain;
