import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routerPaths } from "../router/helper";



export default function Privacy() {

    const { t } = useTranslation();

    return (
        <div className='wrap'>
            <ScrollToTop />
            <main className='main privacy'>
                <Link to={routerPaths.main}>
                    <img src="/images/logo.svg" className="image privacy__image" alt="logo" />
                </Link>

                <h2 className='privacy__title'>{t("privacy.title")}</h2>
                <h3 className='privacy__caption'>{t("privacy.caption-1")}</h3>
                <p className='privacy__text'>{t("privacy.text-1")}</p>

                <h3 className='privacy__caption'>{t("privacy.caption-2")}</h3>
                <p className='privacy__text'>{t("privacy.text-2-1")}</p>
                <p className='privacy__text'>{t("privacy.text-2-2")}</p>
                <p className='privacy__text'>{t("privacy.text-2-3")}</p>

                <h3 className='privacy__caption'>{t("privacy.caption-3")}</h3>
                <p className='privacy__text'>{t("privacy.text-3")}</p>

                <h3 className='privacy__caption'>{t("privacy.caption-4")}</h3>
                <p className='privacy__text'>{t("privacy.text-4-1")}</p>
                <p className='privacy__text'>{t("privacy.text-4-2")}</p>
                <p className='privacy__text'>{t("privacy.text-4-3")}</p>

                <h3 className='privacy__caption'>{t("privacy.caption-5")}</h3>
                <p className='privacy__text'>{t("privacy.text-5-1")}</p>
                <p className='privacy__text'>{t("privacy.text-5-2")}</p>

                <h3 className='privacy__caption'>{t("privacy.caption-6")}</h3>
                <p className='privacy__text'>{t("privacy.text-6")}</p>
            </main>

            <Footer hideNav link={routerPaths.main} text={t("footer.button-back-to-home")} />
        </div>
    )
}
