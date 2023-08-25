import { useTranslation } from "react-i18next";
import react from 'react';
import { Link } from "react-router-dom";

export function Header(props) {
   const { t, i18n } = useTranslation();
   const headerLanguagesIcon = react.createRef(),
      headerLanguagesImg = react.createRef(),
      headerLanguagesListRef = react.createRef();
   const languages = {
      "ru": "/images/flag_rus.png",
      "en": "/images/flag_eng.png",
      "kr": "/images/flag_kor.png",
      "chn": "/images/flag_chn.png"
   };
   let currentLang = i18n.language;
   document.querySelector('html').setAttribute('lang', currentLang);

   const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      headerLanguagesListRef.current.classList.remove('active');
      currentLang = language;
      i18n.changeLanguage(currentLang);
      localStorage.setItem('lng', currentLang);
      headerLanguagesIcon.current.innerText = currentLang;
      headerLanguagesImg.current.setAttribute('src', languages[currentLang]);

      document.querySelector('html').setAttribute('lang', currentLang);
   };

   const showLanguages = () => {
      headerLanguagesListRef.current.classList.toggle('active');
   }

   return (
      <header className="header">
         <div className="header__body">
            <div className="header__logo">
               <h1 className="header__logo-image">
                  <Link to={"/"}>
                     <img src="/images/logo.svg" className="image" alt="logo" />
                  </Link>
               </h1>
            </div>

            <nav className="header__nav">
               <ul className="header__nav-items">
                  <li className="header__nav-item"><a href="#mission">{t("header.menu-item-1")}</a></li>
                  <li className="header__nav-item"><a href="#features">{t("header.menu-item-2")}</a></li>
                  <li className="header__nav-item"><a href="#tokenomics">{t("header.menu-item-3")}</a></li>
                  <li className="header__nav-item"><a href="#q&a">{t("header.menu-item-4")}</a></li>
                  <li className="header__nav-item"><a href="#roadmap">{t("header.menu-item-5")}</a></li>
               </ul>
            </nav>

            <div className='header__languages'>
               <div className='header__languages-icon' onClick={() => showLanguages()}>
                  {<span ref={headerLanguagesIcon}>{i18n.language}</span>}
                  <img ref={headerLanguagesImg} src={languages[currentLang]} alt={currentLang} />
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"></path></svg>
               </div>
               <div className='header__languages-list' ref={headerLanguagesListRef}>
                  <ul className='header__languages-list-items'>
                     <li className='header__languages-list-item' onClick={() => changeLanguage("en")}>
                        <span>English</span>
                        <img src='/images/flag_eng.png' alt="english" />
                     </li>
                     <li className='header__languages-list-item' onClick={() => changeLanguage("kr")}>
                        <span>Korean</span>
                        <img src='/images/flag_kor.png' alt="korean" />
                     </li>
                     <li className='header__languages-list-item' onClick={() => changeLanguage("chn")}>
                        <span>Chinese</span>
                        <img src='/images/flag_chn.png' alt="chinese" />
                     </li>
                     <li className='header__languages-list-item' onClick={() => changeLanguage("ru")}>
                        <span>Русский</span>
                        <img src='/images/flag_rus.png' alt="russian" />
                     </li>
                   </ul>
               </div>
            </div>
         </div>
      </header>
   );
}
