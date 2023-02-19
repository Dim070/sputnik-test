import React, { FC } from 'react';
import linkedinLogo from '../../assets/images/linkedIn.png';
import githubLogo from '../../assets/images/gh.png';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/constants';
import styles from './styles.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>FOOTER</div>
      {/* <div className="container"> */}
      {/*   <div className="myInfo"> */}
      {/*     <span className="title">Dmitriy Tsyrov</span> */}
      {/*     <ul className="contacts"> */}
      {/*       <li className="link"> */}
      {/*         <a href={GITHUB_URL}> */}
      {/*           <img src={linkedinLogo} alt="linkedin" /> */}
      {/*         </a> */}
      {/*       </li> */}
      {/*       <li className="link"> */}
      {/*         <a href={LINKEDIN_URL}> */}
      {/*           <img src={githubLogo} alt="github" /> */}
      {/*         </a> */}
      {/*       </li> */}
      {/*     </ul> */}
      {/*   </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
