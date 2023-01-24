import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./styles.module.scss";



function CardDepo() {
  return (
    <div className={styles[`CardDepo`]}>
      <Carousel
        showArrows={true}
        showThumbs={false}
       /*  onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb} */
      >
        <div className={styles[`CardDepo__container`]}>
          <h2 className={styles[`CardDepo__title`]}>O que dizem sobre nós no Linkedin?</h2>
          <div className={styles[`CardDepo__content`]}>
          {/* <img src={banner1} alt="" /> */}
          {/* <img src={chicks} className={styles[`CardDepo__chicks`]} alt="chicks"/> */}
          <p className={styles[`CardDepo__chicks`]}>”</p>
          <h1 className={styles[`CardDepo__text`]}>Trabalhei na International Masters Publishers como gerente de marketing, após passar por todo processo seletivo intermediado pela Cida Calil e seus consultores associados, em seu escritório de recrutamente e seleção. O serviço dela é eficiente e de muito respeito aos candidatos. Recomendo o trabalho dela como recrutadora. Sucesso em seus trabalhos!</h1>
          <p className={styles[`CardDepo__author`]}>Mauricio Godoy Lopes</p>
          </div>
        </div>
        
       <div className={styles[`CardDepo__container`]}>
          {/* <img src={banner2} alt="" /> */}
          <p className="legend">Legend 2</p>
        </div>
       <div className={styles[`CardDepo__container`]}>
          {/* <img src="assets/3.jpeg" alt="" /> */}
          <p className="legend">Legend 3</p>
        </div>
      
       
      
      </Carousel>
      
    </div>
  );
}

export default CardDepo;
