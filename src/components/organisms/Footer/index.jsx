import React from "react";
import styles from "./styles.module.scss";
import linkedin from "../../../assets/images/linkedin.png" 
import facebook from "../../../assets/images/facebook.png" 
import instagram from "../../../assets/images/instagram.png" 
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
      <p><strong>Email:</strong>{" "}cida.calil@ccalilconsultores.com</p>
      <p><strong>São Paulo/SP</strong>, Brasil</p>
      </div>
      <div className={styles[`footer__icons`]}>
      <div className={styles[`footer__icons--desktop`]}>
      <h2 className={styles[`footer__icons--title`]}>Redes Sociais</h2>
      <div className={styles[`footer__icons--desktopUnit`]}>
      <img
      src={linkedin}
      alt="Linkedin"
      className={styles[`footer__icon`]}
    ></img>
    <img
      src={facebook}
      alt="facebook"
      className={styles[`footer__icon`]}
    ></img>
    <img
      src={instagram}
      alt="instagram"
      className={styles[`footer__icon`]}
    ></img>
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
