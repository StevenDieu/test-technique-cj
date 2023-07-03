import React from "react";

import Menu from "../../components/Menu/Menu";

import HomePageStyles from "./HomePage.module.scss";
import HomeLogo from "../../assets/HomeLogo.svg";
import MetroLogo from "../../assets/MetroLogo.svg";

const HomePage = () => {
  return (
    <div className={HomePageStyles.container}>
      <div className={HomePageStyles.left}>
        <div className={HomePageStyles.title}>OFFRE</div>
        <div className={HomePageStyles.description}>
          Quand spectaculaire rime avec efficacité !
        </div>
        <div className={HomePageStyles.separator} />
        <div className={HomePageStyles.game}>
          <div className={HomePageStyles.gameBrand}>Activision</div>
          <div className={HomePageStyles.gameName}>CALL OF DUTY</div>
        </div>
        <div className={HomePageStyles.place}>
          Digitevent Rotonde Saint-Lazare
        </div>
        <div className={HomePageStyles.stats}>
          <div className={HomePageStyles.statsNumber}>
            <div className={HomePageStyles.numbers}>58%</div>
            <div className={HomePageStyles.statsDescription}>
              Attribution spontanée des gamers réguliers
            </div>
            <div></div>
          </div>
          <div className={HomePageStyles.statsNumber}>
            <div className={HomePageStyles.statsDescription}>
              Agrément des 15-34 ans
            </div>
            <div className={HomePageStyles.numbers}>88%</div>
            <div></div>
          </div>
          <div className={HomePageStyles.statsNumber}>
            <div className={HomePageStyles.numbers}>27%</div>
            <div className={HomePageStyles.statsDescription}>
              Intention d’achat des gamers réguliers
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={HomePageStyles.right}>
        <div className={HomePageStyles.top}>
          <div className={HomePageStyles.menu}>
            <Menu />
          </div>
          <div className={HomePageStyles.homeLogo}>
            <img src={HomeLogo} alt="Home" />
          </div>
          <div className={HomePageStyles.metroLogo}>
            <img src={MetroLogo} alt="Metro" />
          </div>
        </div>
        <div className={HomePageStyles.bottom}>
          <video
            src={require("../../assets/ACTIVISION DIGITEVENT SAINT LAZARE.mp4")}
            style={{ width: '100%', height: 'auto' }}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
