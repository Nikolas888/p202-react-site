import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getExternalLinkProps from "../utils/getExternalLinkProps";

export function TopBlock(props) {
    const { t } = useTranslation();

    return (
        <section
            className="top-block"
            style={{ backgroundImage: "url(/images/top_block_bg.png)" }}
        >
            <Header
            //link={props.link}
            //text="Presale Token"
            />

            <div className="top-block__body">
                <div className="top-block__top">
                    <div className="top-block__left">
                        <div>
                            <a
                                href={props.link.certik}
                            >
                                <img
                                    className="certik"
                                    src="/images/certik-logo-b.png"
                                    alt="image"
                                    width="300"
                                />
                            </a>
                        </div>
                        <h2 className="top-block__left-title">
                            {t("block-1.title-1")}
                        </h2>
                        <img
                            className="top-block__right-image"
                            src="/images/top_block_2-mobile.png"
                            alt="image"
                        />
                        <div className="mobile-store_mobile">
                            <a
                                href={props.link.appStore}
                                {...getExternalLinkProps()}
                                className="mobile-store__btn mobile-store__apple"
                            >
                                <img
                                    src="/images/app_store.svg"
                                    alt="app-store"
                                />
                            </a>
                            <a
                                href={props.link.googlePlay}
                                {...getExternalLinkProps()}
                                className="mobile-store__btn mobile-store__google"
                            >
                                <img
                                    src="/images/google_play.svg"
                                    alt="google-play"
                                />
                            </a>
                        </div>
                        {/*<div className="top-block__left-button">
                            <Link to={props.link.presale}>
                                {t("block-1.button-text")}
                            </Link>
                        </div>
                        <div className="video-instructions">
                            <a
                                className="video__link"
                                target="_blank"
                                href={props.link.video}
                            >
                                <p>{t("block-1.video-instructions-text")}</p>
                                <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M62.4172 44.4948L36.5455 60.2872L35.8047 29.9854L62.4172 44.4948Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45"
                                        cy="45"
                                        r="44.5"
                                        stroke="white"
                                    />
                                </svg>
                            </a>
                        </div>*/}

                    </div>

                    <div className="top-block__right">
                        <img
                            className="top-block__right-image"
                            src="/images/top_block_2.png"
                            alt="image"
                        />
                        <div className="mobile-store">
                            <a
                                href={props.link.appStore}
                                {...getExternalLinkProps()}
                                className="mobile-store__btn mobile-store__apple"
                            >
                                <img
                                    src="/images/app_store.svg"
                                    alt="app-store"
                                />
                            </a>
                            <a
                                href={props.link.googlePlay}
                                {...getExternalLinkProps()}
                                className="mobile-store__btn mobile-store__google"
                            >
                                <img
                                    src="/images/google_play.svg"
                                    alt="google-play"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="top-block__bottom">
                    <h2 className="top-block__title">{t("block-1.title-2")}</h2>
                    <p className="top-block__text">{t("block-1.text-1")}</p>
                    <p className="top-block__text">{t("block-1.text-2")}</p>
                    <div className="top-block__buttons">
                        <div className="top-block__btn top-block__btn_file">
                            <a href={props.link.pdf}>White paper</a>
                        </div>
                        <div className="top-block__btn top-block__btn_github">
                            <a target={"_blank"} href={props.link.gitHub}>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
