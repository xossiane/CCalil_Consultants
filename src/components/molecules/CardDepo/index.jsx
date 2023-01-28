import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./styles.module.scss";



function CardDepo() {
  return (
    <div className={styles[`CardDepo`]}>
      <div className={styles[`CardDepo__container`]}>
      <h2 className={styles[`CardDepo__title`]}>O que dizem sobre nós no Linkedin?</h2>
      <p className={styles[`CardDepo__chicks`]}>”</p>
      
      <Carousel
      
      
      transitionTime={5}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        infiniteLoop={true}
       
        /* onChange={onChange} */
       /*  
        onClickItem={onClickItem}
        onClickThumb={onClickThumb} */
      >
          
          <div className={styles[`CardDepo__content`]}>
         
          <h1 className={styles[`CardDepo__text`]}>Trabalhei na International Masters Publishers como gerente de marketing, após passar por todo processo seletivo intermediado pela Cida Calil e seus consultores associados, em seu escritório de recrutamente e seleção. O serviço dela é eficiente e de muito respeito aos candidatos. Recomendo o trabalho dela como recrutadora. Sucesso em seus trabalhos!</h1>
          <p className={styles[`CardDepo__author`]}>Mauricio Godoy Lopes</p>
          </div>


          <div className={styles[`CardDepo__content`]}>
     
          
          <h1 className={styles[`CardDepo__text`]}>Cida Calil is an extremely dedicated Professional always committed with the company as well as with the candidates who use to look for an opportunity at BCP.
She has terrific personal values. I am pleased to have Cida as my personal friend as well as her family.
I strongly recommend Cida for any function as one company employee or as a services supplier.</h1>
          <p className={styles[`CardDepo__author`]}>Miro Daud</p>
          </div>



          <div className={styles[`CardDepo__content`]}>
        
          
          <h1 className={styles[`CardDepo__text`]}>Cida was an excellent internal Business Partner, connecting HR with the Engineering a IT divisions, for 6 years ,from start-up to the sale of the company.Very good human relations and communications skills. She also led the start-up Recruiting team, and was critical in hiring and placing 2000 employees in Brazil in 8 months.Later, she also managed the Pension Plan.
 In a prior Company, Dow Chemical Brazil, she was also an outstanding HR professional under my Directorship.</h1>
          <p className={styles[`CardDepo__author`]}>Philip Dwyer</p>
          </div>






          </Carousel>
        </div>
      
        
      
     
      
    </div>
  );
}

export default CardDepo;
