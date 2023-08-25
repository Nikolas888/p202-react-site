// import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';



export function Features() {
   const { t } = useTranslation();

   const featuresItemsData = [
      {
         "img_url": '/images/features_1.png',
         'text_top': t("block-3.card-1.title"),
         'text_bottom': t("block-3.card-1.description")
      },
      {
         "img_url": '/images/features_2.png',
         'text_top': t("block-3.card-2.title"),
         'text_bottom': t("block-3.card-2.description")
      },
      {
         "img_url": '/images/features_3.png',
         'text_top': t("block-3.card-3.title"),
         'text_bottom': t("block-3.card-3.description")
      },
      {
         "img_url": '/images/features_4.png',
         'text_top': t("block-3.card-4.title"),
         'text_bottom': t("block-3.card-4.description")
      }
   ];

   return (
      <section className="features" id="features">
         <div className="features__body">
            <h2 className="features__title">{t("block-3.title")}</h2>
            <p className="features__description">{t("block-3.subtitle")}</p>

            <div className="features__items pc">
               {featuresItemsData.map((item, index) => (

                  <div className="features__item" key={index}>
                     <div className="features__item-body">
                        <div className="features__item-image">
                           <img src={item.img_url} alt={item.text_top} />
                        </div>
                        <p className="features__item-text-top">{item.text_top}</p>
                        <p className="features__item-text-bottom">{item.text_bottom}</p>
                     </div>
                  </div>

               ))}
            </div>

            <div className="features__items mobile">
               <Swiper slidesPerView={'auto'}>

                  {featuresItemsData.map((item, index) => (

                     <SwiperSlide className="features__item" key={index}>

                        <div className="features__item-body">
                           <div className="features__item-image">
                              <img src={item.img_url} alt={item.text_top} />
                           </div>
                           <p className="features__item-text-top">{item.text_top}</p>
                           <p className="features__item-text-bottom">{item.text_bottom}</p>
                        </div>

                     </SwiperSlide>

                  ))}

               </Swiper>
            </div>
         </div>
      </section>
   );
}
