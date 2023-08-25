import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
   companyName, companyDuns, companyEmail,
   companyInstagram, companyTwitter, companyGithub, companyTelegram,
} from "../constants";
import { routerPaths } from "../router/helper";



export function Footer(props) {
   const { t } = useTranslation();

   const GlobalStyle = createGlobalStyle`
      .footer {
         &::before {
            background-image: url(/images/footer_mask.png);
         }
      }
   `;

   return (
      <footer className="footer" style={{ backgroundImage: 'url(/images/footer_bg.png)' }}>
         <GlobalStyle />

         <header className="header">
            <div className="header__body">
               <div className="header__logo">
                  <h1 className="header__logo-image">
                     <Link to={routerPaths.main}>
                        <img src="/images/logo.svg" className="image" alt="logo" />
                     </Link>
                  </h1>
               </div>

               {!props.hideNav && <nav className="header__nav">
                  <ul className="header__nav-items">
                     <li className="header__nav-item"><a href="#mission">{t("footer.menu-item-1")}</a></li>
                     <li className="header__nav-item"><a href="#features">{t("footer.menu-item-2")}</a></li>
                     <li className="header__nav-item"><a href="#tokenomics">{t("footer.menu-item-3")}</a></li>
                     <li className="header__nav-item"><a href="#q&a">{t("footer.menu-item-4")}</a></li>
                     <li className="header__nav-item"><a href="#roadmap">{t("footer.menu-item-5")}</a></li>
                  </ul>
               </nav>}

               {props.link && <div className="header__button">
                  <Link to={props.link}>{props.text}</Link>
               </div>}
            </div>
         </header>

         <div className="footer__body">
            <div className='footer__contacts'>
               <div className='footer__row email'>
                  <img src="/images/mail.svg" alt="email" />
                  <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
               </div>
               {props.link && <div className="footer__button">
                  <Link to={`${props.link}`}>{props.text}</Link>
               </div>}
               <div className='footer__row social'>
                  <a href={companyTwitter} target="_blank">
                     <img src="/images/twitter.svg" alt="twitter" />
                  </a>
                  <a href={companyGithub} target="_blank">
                     <img src="/images/github.svg" alt="github" />
                  </a>
                  <a href={companyTelegram} target="_blank">
                     <img src="/images/telegram.svg" alt="telegram" />
                  </a>
               </div>
               <div className="footer__bottom">
                  <div className='footer__bottom-item'>{companyName}</div>
               </div>
               <div style={{ textAlign: 'center', }}>
                  <Link style={{
                     color: '#ffffff',
                     fontSize: '17px',
                     fontFamily: 'Inter,Arial,sans-serif',
                     lineHeight: '1.55',
                     fontWeight: '600',
                     textDecoration: 'none',
                  }} to={routerPaths.privacy}>{t("footer.menu-item-6")}</Link>
               </div>
               <br />
            </div>
         </div>
      </footer>
   );
}
