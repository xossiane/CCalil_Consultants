import React from "react";
import styles from "./styles.module.scss";
import linkedin from "../../../assets/images/linkedin.png"
import facebook from "../../../assets/images/facebook.png"
import insta from "../../../assets/images/insta.png"
import telefone from "../../../assets/images/telefone.png"
import whatsapp from "../../../assets/images/whatsapp.png"
import email from "../../../assets/images/email.png"
import linkedinsymbol from "../../../assets/images/linkedinsymbol.png"
export default function Footer() {
  return (
    <footer className={styles[`footer`]}>
      <h2 className={styles[`footer__text`]}>Contato</h2>
      <div className={styles[`footer__contact`]}>
        <div className={styles[`footer__contact--desktop`]}>

          <div className={styles[`footer__location`]}>
            <p className={styles[`footer__location--title`]}><strong>Localização:</strong></p> <p>São Paulo/SP</p>
          </div>
          <div className={styles[`footer__contact--info`]}>
          
            <p><strong>Whatsapp:</strong> +55 (11)99185-0112</p>

            <p><strong>Email:</strong><a style={{ color: 'white' }} href="mailto:cv@ccalilconsultores.com.br">{" "}cida.calil@ccalilconsultores.com</a></p>

          </div>

          <div className={styles[`footer__contactDesktop--info`]}>
          <p className={styles[`footer__contactDesktop--title`]}><strong>Contato</strong></p>
            <span className={styles[`footer__contactDesktop--row`]}><img className={styles[`footer__iconsDesktop--symbol`]} src={telefone} alt="telefone"/><p><strong>Telefone:</strong> +55 (11)2994-2190</p></span>
            <span className={styles[`footer__contactDesktop--row`]}><img className={styles[`footer__iconsDesktop--symbol`]} src={whatsapp} alt="whatsapp"/><p><strong>Whatsapp:</strong> +55 (11)99185-0112</p></span>
            <span className={styles[`footer__contactDesktop--row`]}><img className={styles[`footer__iconsDesktop--symbol`]} src={email} alt="E-mail"/><p><strong>E-mail:</strong> +55 (11)99185-0112</p></span>
            <span className={styles[`footer__contactDesktop--row`]}><img className={styles[`footer__iconsDesktop--symbol`]} src={linkedinsymbol} alt="LinkedIn"/><p><strong>LinkedIn:</strong> +55 (11)99185-0112</p></span>

          </div>
          <div className={styles[`footer__icons`]}>
            <div className={styles[`footer__icons--desktop`]}>
              <h2 className={styles[`footer__icons--title`]}>Redes Sociais</h2>
              <div className={styles[`footer__icons--desktopUnit`]}>
                <a href="https://www.linkedin.com/in/cidacalil/">
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    className={styles[`footer__icon`]}
                  /></a>

                <a href="https://www.facebook.com/CCalilConsultores">
                  <img
                    src={facebook}
                    alt="facebook"
                    className={styles[`footer__icon`]}
                  />
                </a>

                <a href="https://www.facebook.com/CCalilConsultores">
                  <img
                    src={insta}
                    alt="instagram"
                    className={styles[`footer__icon`]}
                  />
                </a>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className={styles[`footer__copyright`]}>
        <p>Copyright© 2023 CCalil Consultores</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
