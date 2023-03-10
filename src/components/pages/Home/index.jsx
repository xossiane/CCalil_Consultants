import React from "react";
import Header from "../../organisms/NavBar";
import Button from "../../atoms/Button";
import Banner from "../../../assets/images/Hero/CCC-banner-teste2.png";
import styles from "./styles.module.scss";
import CardIcons from "../../molecules/CardIcons";
import CardText from "../../molecules/CardText";
import cida from "../../../assets/images/cida.png";
import responsability from "../../../assets/images/responsability.png";
import CardDepo from "../../molecules/CardDepo";
import Footer from "../../organisms/Footer";
import SignupForm from "../../molecules/Form";

function HomePage() {
  const cardInfo = [
    {
      id: 0,
      title: "RECRUTAMENTO & SELEÇÃO",
      text: "Identificamos no mercado talentos humanos através de processos desenhados de acordo com o perfil solicitado pelo cliente. Conduzimos processos seletivos de executivos e profissionais. Realizamos entrevistas no idioma inglês.",
    },
    {
      id: 1,
      title: "COACHING EXECUTIVO",
      text: "Programa individual de desenvolvimento de competências, com a orientação de um coach executivo, através do qual o profissional irá desenvolver seu projeto de carreira dentro da empresa-cliente.",
    },
    {
      id: 2,
      title: "AVALIAÇÃO DE PERFIL PROFISSIONAL",
      text: "Conduzimos entrevistas a partir das competências organizacionais para processos de promoção, sucessão e melhoria de performance.",
    },
  ];

  const cardInfo2 = [
    {
      id: 0,
      title: "MISSÃO",
      text: "Fortalecer as empresas através de um excelente processo seletivo.",
    },
    {
      id: 1,
      title: "VISÃO",
      text: "Ser reconhecida pelas empresas e profissionais como referência em Recrutamento e Seleção, e fazer parte do sucesso de nossos clientes.",
    },
    {
      id: 0,
      title: "VALORES",
      text: "Ética, respeito, transparência, relacionamento e comprometimento.",
    },
  ];

  return (
    <>
      <Header />
      <header id="home">
        <img
          src={Banner}
          className={styles[`HomePage__img`]}
          alt="Soluções adequadas às particularidades de cada organização"
        ></img>

        {/* <h1 className={styles[`HomePage__headerText`]}>
          Desde 2008, a CCalil Consultores oferece soluções, de forma acertada,
          para seus clientes.{" "}
        </h1> */}

      </header>

      <div id="quemsomos" className={styles[`HomePage__description`]}>
        <h2 className={styles[`HomePage__description--title`]}>
          A CCalil Consultores
        </h2>
        <p className={styles[`HomePage__description--text`]}>
          A CCalil Consultores nasceu em 2008 como uma consultoria especializada em <strong className={styles.bolded}>atrair, recrutar e selecionar </strong>
          profissionais para atender empresas nacionais e globais, <strong className={styles.bolded}>atendendo aos objetivos estratégicos do negócio e em conformidade com a cultura organizacional.</strong>
          <br></br>
          <br></br>
          Nossos serviços são conduzidos por profissionais com décadas de experiência, grande expertise em processos seletivos, atendendo empresas de todos os segmentos industriais do país.
          <br></br>
        </p>
      </div>
      <div className={styles[`HomePage__profile`]}>
        <div className={styles[`HomePage__profileSection`]}>
          <img
            src={cida}
            alt="Cida Calil"
            className={styles[`HomePage__avatar`]}
          ></img>
          <h2 className={styles[`HomePage__avatar--name`]}>Cida Calil - Headhunter</h2>
        </div>
        <p className={styles[`HomePage__profile--text`]}>
          Vivência de mais de 35 anos em Recursos Humanos.
          <br></br>
          <br></br>
          Carreira desenvolvida em empresas multinacionais e nacionais como BCP/Claro, Dow Quimica, Farmasa e Bola Brasil.
          <br></br>
          <br></br>
          Coach certificada pela Sociedade Brasileira de Coaching (SBC) e Pós Graduada em Gestão Empresarial.
          <br></br>
          <br></br>
          Inglês fluente.
        </p>
      </div>
      <div className={styles[`HomePage__values`]}>
        <CardText mt="mt" className={styles[`HomePage__values--card`]} list={cardInfo2} />
      </div>

      <div className={styles[`HomePage__cardIcons`]}>
        <h2 className={styles[`HomePage__cardIcons--text`]}>
          CCalil em números
        </h2>
        <div className={styles[`HomePage__cardIcons--container`]}>
        <CardIcons number={13} text="anos de atuação" icon={"src/assets/images/time.png"}></CardIcons>
        <CardIcons number={39} text="empresas atendidas" icon={"src/assets/images/house.png"}></CardIcons>
        <CardIcons number={300} text="contratações" icon={"src/assets/images/people.png"}></CardIcons>
        </div>
        
      </div>
      <div id="servicos" className={styles[`HomePage__cardText`]}>
        <h2 className={styles[`HomePage__cardText--text`]}>Nossos serviços</h2>
        <CardText list={cardInfo} />
      </div>
      <div id="contato" className={styles[`HomePage__solicitation`]}>
        <div className={styles[`HomePage__solicitation1`]}>
          <h2 className={styles[`HomePage__solicitation2--subtitle`]}>Para empresas</h2>
          <h2 className={styles[`HomePage__solicitation--text`]}>
            Precisa de algum serviço?
          </h2>

          <Button>Contratar Serviço</Button>

        </div>
        <div className={styles[`HomePage__solicitation2`]}>
          <h2 className={styles[`HomePage__solicitation2--subtitle`]}>Para candidatos</h2>
          <h2 className={styles[`HomePage__solicitation--text`]}>
            Buscando colocação?
          </h2>
          <a href="mailto:cv@ccalilconsultores.com.br">
            <Button mt="mt">Enviar CV</Button>
          </a>
        </div>
      </div>


      <CardDepo></CardDepo>

      <div id="responsabilidadesocial" className={styles[`HomePage__responsability`]}>

        <h2 className={styles[`HomePage__responsability--title`]}>Responsabilidade Social</h2>
        <img src={responsability} className={styles[`HomePage__img--mt`]} alt="responsibility" />
        <h2 className={styles[`HomePage__responsability--subtitle`]} >Projeto Biblioteca Infanto-Juvenil - Associação Amigo Beija-Flor</h2>
        <p className={styles[`HomePage__responsability--text`]}>A CCalil Consultores apoia a Associação Amigo Beija-Flor desde a sua fundação, em 1999 e, transformação em Associação, em 2005. Participa de diversos projetos, como o Projeto Biblioteca Beija-Flor acima.
          Caso queira saber mais sobre a Associação, clique <a>aqui.</a></p>
      </div>
      <SignupForm></SignupForm>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
