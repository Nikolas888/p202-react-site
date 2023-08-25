import { useTranslation } from "react-i18next";

export function Questions() {
   const { t } = useTranslation();

   const questionClick = (e) => {
      const questionsListItem = e.target.closest('.questions__list-item');
      questionsListItem.classList.toggle('active');
   }

   return (
      <section className="questions" id="q&a">
         <div className="questions__body">
            <h2 className="questions__title">{t("block-5.title")}</h2>

            <div className="questions__list">

               <div className="questions__list-item" onClick={(e) => questionClick(e) }>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-1.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-1.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-2.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-2.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-3.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-3.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-4.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-4.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-5.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-5.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-6.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-6.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

               <div className="questions__list-item" onClick={(e) => questionClick(e)}>
                  <div className="question">
                     <p className="question__text">{t("block-5.elem-7.question")}</p>
                     <span className="icon">+</span>
                  </div>
                  <div className="answer">
                     <p className="answer__text">{t("block-5.elem-7.answer")}</p>
                  </div>
                  <div className="line"></div>
               </div>

            </div>
         </div>
      </section>
   );
}