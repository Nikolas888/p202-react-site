// import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {
   companyInstagram, companyTwitter, companyGithub, companyTelegram,
   companyYoutube, companyDiscord, companyMedium,
} from "../constants";



export function Team2() {
   const { t } = useTranslation();

   const mediaItemsData = [{
      "img_url": "https://static.tildacdn.com/tild6439-3063-4166-b530-306135313466/women-.png",
      "title": t("block-9.card-6.title"),
      "description": t("block-9.card-6.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild6336-3064-4337-b831-666262656263/elena.png",
      "title": t("block-9.card-7.title"),
      "description": t("block-9.card-7.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild6463-3565-4866-a635-633363613661/man-2-.png",
      "title": t("block-9.card-8.title"),
      "description": t("block-9.card-8.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild3763-3263-4333-b339-633932623035/man-.png",
      "title": t("block-9.card-9.title"),
      "description": t("block-9.card-9.description")
   }, {
      "img_url": "https://static.tildacdn.com/tild3339-6432-4035-b061-346265323035/Ramin-3.png",
      "title": t("block-9.card-10.title"),
      "description": t("block-9.card-10.description")
   }];

   return (
      <section className="media" id="media">
         <div className="media__body">
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
