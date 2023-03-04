import React from 'react'
import CCLogo from "../../../assets/images/CCLogo.png"
import cida from "../../../assets/images/cida.png";
import styles from './styles.module.scss'
import linkedin from "../../../assets/images/linkedin.png"
import Globe from "../../../assets/images/Globe.png"
import Phone from "../../../assets/images/Phone.png"
import WhatsappLogo from "../../../assets/images/WhatsappLogo.png"
import Envelope from "../../../assets/images/Envelope.png"

function MainCard() {
  return (
   
    <div className={styles[`MainCard`]}>
      <header>
      <img
            className={styles[`MainCard__logo`]}
            src={CCLogo}
            alt="CCalil Consultores"
          />
      </header>
      <span>
      <div className={styles[`MainCard__profileSection`]}>
          <img
            src={cida}
            alt="Cida Calil"
            className={styles[`MainCard__avatar`]}
          ></img>
          <h2 className={styles[`MainCard__avatar--name`]}>Cida Calil</h2>
          <h2 className={styles[`MainCard__avatar--job`]}>Headhunter para Empresas</h2>
        </div>
      </span>
      <span>
      <div className={styles[`MainCard__icons`]}>
                <a href="tel:+5511991850112">
                  <img
                    src={Phone}
                    alt="Phone"
                    className={styles[`MainCard__icon`]}
                  /></a>
                   <a href="https://api.whatsapp.com/send?phone=11991850112">
                  <img
                    src={WhatsappLogo}
                    alt="WhatsappLogo"
                    className={styles[`MainCard__icon`]}
                  />
                </a>

                <a href="mailto:cida.calil@ccalilconsultores.com.br">
                  <img
                    src={Envelope}
                    alt="email"
                    className={styles[`MainCard__icon`]}
                  />
                </a>

                <a href="https://www.linkedin.com/in/cidacalil/">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className={styles[`MainCard__icon`]}
                  />
                </a>
              </div>
      </span>
      <span className={styles[`MainCard__link`]}>
      <a href="https://www.ccalilconsultores.com.br/">
                  <img
                    src={Globe}
                    alt="Globe"
                    className={styles[`MainCard__icon--link`]}
                  />
                </a> <a href="https://www.ccalilconsultores.com.br/"><h2  className={styles[`MainCard__avatar--job`]}>https://www.ccalilconsultores.com.br/</h2></a>
      </span>
      <h2 className={styles[`MainCard__avatar--job`]}>Clique nos ícones para interagir</h2>
    </div>
    
  )
}

export default MainCard