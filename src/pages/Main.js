import { TopBlock } from "../components/TopBlock";
import { Mission } from "../components/Mission";
import { Footer } from "../components/Footer";
import { Features } from "../components/Features";
import { Media } from "../components/Media";
import { Team } from "../components/team";
import { Team2 } from "../components/team2";

import { GetInfo } from "../components/GetInfo";
import { Roadmap } from "../components/Roadmap";
import { Questions } from "../components/Questions";
import { Tokenomics } from "../components/Tokenomics";
import { Sent } from "../components/Sent";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";
import { routerPaths } from "../router/helper";

export default function Main() {
    const { t } = useTranslation();

    return (
        <div className="wrap">
            <ScrollToTop />

            <main className="main index">
                <TopBlock
                    link={{
                        //presale: routerPaths.presale,
                        privacy: routerPaths.privacy,
                        video: routerPaths.video,
                        appStore: routerPaths.appStore,
                        googlePlay: routerPaths.googlePlay,
                        gitHub: routerPaths.gitHub,
                        pdf: routerPaths.pdf,
                        certik: routerPaths.certik,
                    }}
                />
                <Mission />
                <Features />
                <Tokenomics />
                <Questions />
                <Roadmap />
                <Media />
                <Team />
                <Team2 />
                <GetInfo />
                <Sent />
            </main>

            <Footer
            //link={routerPaths.presale}
            //text={t("footer.button-main-text")}
            />
        </div>
    );
}
