import React, { FC } from 'react';
import { INasa } from '../../models/INasa';

const Header: FC<INasa> = ({ title, explanation, url }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <img src={url} />
    </header>
  );
};

export default Header;
