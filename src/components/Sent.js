import React from 'react';
import { useTranslation } from "react-i18next";

export function Sent() {
   const { t } = useTranslation();

   const sentWinClose = () => {
      const sentWin = document.querySelector('.sent-win');

      sentWin.classList.remove('active');
   }

   return (
      <div className="sent-win">
         <div className="sent-win__overlay" onClick={sentWinClose}></div>

         <div className="sent-win__body">
            <div className="sent-win__field">
               <div className="sent-win__close-button" onClick={sentWinClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 23 23"> <g fillRule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"></path> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"></path> </g> </svg>
               </div>

               <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"></path> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"></path> </svg>
               <h2 className="sent-win__title">{t("block-8.sent-text")}</h2>
            </div>
         </div>
      </div>
   );
}