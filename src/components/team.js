// import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {
   companyInstagram, companyTwitter, companyGithub, companyTelegram,
   companyYoutube, companyDiscord, companyMedium,
} from "../constants";



export function Team() {
   const { t } = useTranslation();

   const mediaItemsData = [{
      "img_url": "https://static.tildacdn.com/tild3765-6339-4639-a463-343762396230/Rustam.png",
      "title": t("block-9.card-1.title"),
      "description": t("block-9.card-1.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild6531-6461-4435-b265-393534306464/Dmitry.png",
      "title": t("block-9.card-2.title"),
      "description": t("block-9.card-2.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild6131-3636-4338-b638-613761343766/Svetlana.png",
      "title": t("block-9.card-3.title"),
      "description": t("block-9.card-3.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild6530-3264-4130-b562-646366623162/Nikolay.png",
      "title": t("block-9.card-4.title"),
      "description": t("block-9.card-4.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild3336-6637-4431-b233-656539633662/Yurii.png",
      "title": t("block-9.card-5.title"),
      "description": t("block-9.card-5.description")
   }];

   return (
      <section className="media" id="media">
         <div className="media__body">
            <h2 className="media__title">{t("block-9.title")}</h2>
            <div className="media__items pc">
               {mediaItemsData.map((item, index) => (
                  <div className="media__item" key={index}>
                     <a href={item.link} target="_blank" className="media__item-body">
                        <div className="media__item-image">
                           <img src={item.img_url} alt={item.title} />
                        </div>
                        <div className='media__item-info'>
                           <h4 className="media__item-title">{item.title}</h4>
                           <p className="media__item-text">{item.description}</p>
                        </div>
                     </a>
                  </div>
               ))}
            </div>

            <div className="media__items mobile">
               <Swiper slidesPerView={'auto'}>

                  {mediaItemsData.map((item, index) => (

                     <SwiperSlide className="media__item" key={index}>

                        <a href={item.link} target="_blank" className="media__item-body">
                           <div className="media__item-image">
                              <img src={item.img_url} alt={item.title} />
                           </div>
                           <div className='media__item-info'>
                              <h4 className="media__item-title">{item.title}</h4>
                              <p className="media__item-text">{item.description}</p>
                           </div>
                        </a>

                     </SwiperSlide>

                  ))}

               </Swiper>
            </div>
         </div>
      </section>
   );
}
