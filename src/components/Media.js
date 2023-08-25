// import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {
   companyInstagram, companyTwitter, companyGithub, companyTelegram,
   companyYoutube, companyDiscord, companyMedium,
} from "../constants";



export function Media() {
   const { t } = useTranslation();

   const mediaItemsData = [{
      "link": companyDiscord,
      "img_url": "/images/discord.png",
      "title": t("block-7.card-1.title"),
      "description": t("block-7.card-1.description")
   }, {
      "link": companyTwitter,
      "img_url": "/images/twitter.png",
      "title": t("block-7.card-2.title"),
      "description": t("block-7.card-2.description")
   }, {
      "link": companyYoutube,
      "img_url": "/images/youtube.png",
      "title": t("block-7.card-3.title"),
      "description": t("block-7.card-3.description")
   }, {
      "link": companyMedium,
      "img_url": "/images/medium.png",
      "title": t("block-7.card-4.title"),
      "description": t("block-7.card-4.description")
   }, {
      "link": companyGithub,
      "img_url": "/images/github.png",
      "title": t("block-7.card-5.title"),
      "description": t("block-7.card-5.description")
   }];

   return (
      <section className="media" id="media">
         <div className="media__body">
            <h2 className="media__title">{t("block-7.title")}</h2>
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
