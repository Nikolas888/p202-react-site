import { createGlobalStyle } from 'styled-components';
import { useTranslation } from "react-i18next";

export function Tokenomics() {
   const { t } = useTranslation();

   const GlobalStyle = createGlobalStyle`
      .tokenomics__items-graphs-body{
         background: url(/images/graph.png) 15px calc(100% + 15px) no-repeat;
         background-size: cover;
      }
   `;

   return (
      <section className="tokenomics" id="tokenomics">
         <GlobalStyle />
         <div className="tokenomics__body">
            <h2 className="tokenomics__title">{t("block-4.title")}</h2>
            <p className="tokenomics__description">{t("block-4.subtitle")}</p>
            <div className="tokenomics__items">
               <div className="tokenomics__items-percents">
                  <div className="tokenomics__items-percent left">
                     <div className="percent__col left">
                        <p className="percent__col-text">{t("block-4.card-text-1.text")}</p>
                        <div className="percent__col-number">{t("block-4.card-text-1.percent")}%</div>
                     </div>
                     <div className="percent__col right">
                        <p className="percent__col-text">{t("block-4.card-text-2.text")}</p>
                        <div className="percent__col-number">{t("block-4.card-text-2.percent")}%</div>
                     </div>
                  </div>

                  <div className="tokenomics__items-percent right">
                     <div className="percent__col left">
                        <div className="percent__col-row top">
                           <p className="percent__col-text">{t("block-4.card-text-3.text")}</p>
                           <div className="percent__col-number">{t("block-4.card-text-3.percent")}%</div>
                        </div>
                        <div className="percent__col-row bottom">
                           <p className="percent__col-text">{t("block-4.card-text-4.text")}</p>
                           <div className="percent__col-number">{t("block-4.card-text-4.percent")}%</div>
                        </div>
                     </div>
                     <div className="percent__col right">
                        <div className="percent__col-row top">
                           <p className="percent__col-text">{t("block-4.card-text-5.text")}</p>
                           <div className="percent__col-number">{t("block-4.card-text-5.percent")}%</div>
                        </div>
                        <div className="percent__col-row middle">
                           <div className="percent__col left">
                              <p className="percent__col-text">{t("block-4.card-text-6.text")}</p>
                              <div className="percent__col-number">{t("block-4.card-text-6.percent")}%</div>
                           </div>
                           <div className="percent__col right" style={{ display: 'none' }}>
                              <p className="percent__col-text">{t("block-4.card-text-7.text")}</p>
                              <div className="percent__col-number">{t("block-4.card-text-7.percent")}%</div>
                           </div>
                        </div>
                        <div className="percent__col-row bottom" style={{ display: 'none' }}>
                           <div className="percent__col left">
                              <p className="percent__col-text">{t("block-4.card-text-8.text")}</p>
                              <div className="percent__col-number">{t("block-4.card-text-8.percent")}%</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tokenomics__items-graphs">
                  <div className='tokenomics__items-graphs-body'>
                     <h4 className="tokenomics__items-title">{t("block-4.graph.title")}</h4>
                     <div className="tokenomics__graphs-cols">
                        <div className="tokenomics__graphs-col">
                           <div className="row__count">
                              <div className="row__count-top">{t("block-4.graph.text-1.count")}</div>
                              <div className="row__count-bottom">{t("block-4.graph.text-1.year")}</div>
                           </div>
                           <div className="row__count-info">
                              <p className="row__count-info-text">{t("block-4.graph.text-1.row-1")}</p>
                              <p className="row__count-info-text">{t("block-4.graph.text-1.row-2")}</p>
                           </div>
                        </div>

                        <div className="tokenomics__graphs-col">
                           <div className="row__count">
                              <div className="row__count-top">{t("block-4.graph.text-2.count")}</div>
                              <div className="row__count-bottom">{t("block-4.graph.text-2.year")}</div>
                           </div>
                           <div className="row__count-info">
                              <p className="row__count-info-text">{t("block-4.graph.text-2.row-1")}</p>
                              <p className="row__count-info-text">{t("block-4.graph.text-2.row-2")}</p>
                           </div>
                        </div>

                        <div className="tokenomics__graphs-col">
                           <div className="row__count">
                              <div className="row__count-top">{t("block-4.graph.text-3.count")}</div>
                              <div className="row__count-bottom">{t("block-4.graph.text-3.year")}</div>
                           </div>
                           <div className="row__count-info">
                              <p className="row__count-info-text">{t("block-4.graph.text-3.row-1")}</p>
                              <p className="row__count-info-text">{t("block-4.graph.text-3.row-2")}</p>
                           </div>
                        </div>
                        <div className="tokenomics__graphs-col">
                           <div className="row__count">
                              <div className="row__count-top">{t("block-4.graph.text-4.count")}</div>
                              <div className="row__count-bottom">{t("block-4.graph.text-4.year")}</div>
                           </div>
                           <div className="row__count-info">
                              <p className="row__count-info-text">{t("block-4.graph.text-4.row-1")}</p>
                              <p className="row__count-info-text">{t("block-4.graph.text-4.row-2")}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tokenomics__items-description">
                  <p className="left">{t("block-4.text-bottom")}</p>
                  <ul className="right">
                     <li>{t("block-4.list.elem-1")}</li>
                     <li>{t("block-4.list.elem-2")}</li>
                     <li>{t("block-4.list.elem-3")}</li>
                     <li>{t("block-4.list.elem-4")}</li>
                     <li>{t("block-4.list.elem-5")}</li>
                     <li>{t("block-4.list.elem-6")}</li>
                     <li>{t("block-4.list.elem-7")}</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}