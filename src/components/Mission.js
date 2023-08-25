import { createGlobalStyle } from 'styled-components';
import { useTranslation } from "react-i18next";

export function Mission() {
   const GlobalStyle = createGlobalStyle`
      .mission {
         &::before {
            background-image: url(/images/mission_mask.png);
         }
      }
   `;

   const { t } = useTranslation();

   return (
      <section className="mission" id="mission">
         <GlobalStyle />

         <div className="mission__body">
            <h2 className="mission__title">{t("block-2.title")}</h2>
            <div className="mission__info" style={{ backgroundImage: 'url(/images/mission_bg.png)' }}>
               <div className="mission__info-top">
                  <div className="mission__info-title">
                     <h3>{t("block-2.text-1")}</h3>
                  </div>
                  <div className="mission__info-description">
                     <p className="text">{t("block-2.text-2")}</p>
                     <p className="text">{t("block-2.text-3")}</p>
                  </div>
               </div>

               <div className="mission__info-bottom">
                  <div className="mission__info-bottom-left">
                     <h3 className="mission__info-bottom-title">{t("block-2.text-4")}</h3>
                     <p className="mission__info-bottom-text">{t("block-2.text-5")}</p>
                     <p className="mission__info-bottom-right-text">{t("block-2.text-6")}</p>
                  </div>

                  <div className="mission__info-bottom-right">
                     <p className="mission__info-bottom-right-text">{t("block-2.text-6")}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}