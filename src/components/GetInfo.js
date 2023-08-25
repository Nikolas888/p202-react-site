import React from 'react';
import { useTranslation } from "react-i18next";



export function GetInfo() {
   const { t } = useTranslation();

   const getInfoSubmit = (e) => {
      e.preventDefault();

      const sentWin = document.querySelector('.sent-win');
      sentWin.classList.add('active');
   }

   return (
      <section className="get-info">
         <div className="get-info__body">
            <form className="get-info__form" onSubmit={(e) => getInfoSubmit(e)}>
               <h2 className="get-info__title">{t("block-8.title")}</h2>
               <p className="get-info__text">{t("block-8.subtitle")}</p>
               <input className="get-info__input" type="email" name="E-mail" placeholder={t("block-8.input-placeholder")} autoComplete="off" />
               <button className="get-info__button">
                  <span className='text before'>{t("block-8.button-text")}</span>
               </button>
            </form>
         </div>
      </section>
   );
}
