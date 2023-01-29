import React from "react";
import Header from "../../organisms/NavBar";
import Button from "../../atoms/Button";
import Banner from "../../../assets/images/Hero/Banner.png";
import styles from "./styles.module.scss";
import CardIcons from "../../molecules/CardIcons";
import CardText from "../../molecules/CardText";
import cida from "../../../assets/images/cida.png";
import responsability from "../../../assets/images/responsability.png";
import CardDepo from "../../molecules/CardDepo";
import Footer from "../../organisms/Footer";

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
      text: "Indicar os melhores profissionais para os nossos clientes, através de um serviço personalizado e de qualidade.",
    },
    {
      id: 1,
      title: "VISÃO",
      text: "Ser reconhecida como empresa séria e responsável e, fazer parte do sucesso de nossos clientes. ",
    },
    {
      id: 0,
      title: "VALORES",
      text: "Ética, respeito, honestidade, transparência, responsabilidade e comprometimento.",
    },
  ];

  return (
    <>
      <Header />
      <header>
        <img
          src={Banner}
          className={styles[`HomePage__img`]}
          alt="Soluções adequadas às particularidades de cada organização"
        ></img>
        <h1 className={styles[`HomePage__headerText`]}>
          Desde 2008, a CCalil Consultores oferece soluções, de forma acertada,
          para seus clientes.{" "}
        </h1>
      </header>
      <div className={styles[`HomePage__cardIcons`]}>
        <h2 className={styles[`HomePage__cardIcons--text`]}>
          CCalil em números
        </h2>
        <CardIcons />
      </div>
      <div className={styles[`HomePage__cardText`]}>
        <h2 className={styles[`HomePage__cardText--text`]}>Nossos serviços</h2>
        <CardText list={cardInfo} />
      </div>
      <div className={styles[`HomePage__solicitation`]}>
        <h2 className={styles[`HomePage__solicitation--text`]}>
          Precisa de algum serviço?
        </h2>
        <Button>Contratar Serviço</Button>
        <h2 className={styles[`HomePage__solicitation--text`]}>
          Buscando colocação?
        </h2>
        <Button mt="mt">Enviar CV</Button>
      </div>
      <div className={styles[`HomePage__description`]}>
        <h2 className={styles[`HomePage__description--title`]}>
          A CCalil Consultores
        </h2>
        <p className={styles[`HomePage__description--text`]}>
          <strong>Fundada em 2008,</strong> a CCalil Consultores possui{" "}
          <strong>experiência</strong> e <strong>maturidade</strong> na condução
          dos serviços que oferece.<br></br>
          <br></br>
          Nossa equipe é formada por profissionais que trabalham de{" "}
          <strong>maneira personalizada</strong>, procurando primeiramente
          entender a cultura e particularidades de cada organização para
          oferecer <strong>soluções adequadas</strong> as suas necessidades.
          <br></br>
          <br></br>
          Atendemos conceituadas empresas nacionais e multinacionais, dos mais
          variados setores, tais como:{" "}
          <strong>
            Indústrias Químicas, Farmacêuticas, Telecomunicações, T.I.,
            Importadora de Mármores, Empresa de Engenharia, Escritório de
            Arquitetura, Indústria de Autopeças etc.
          </strong>{" "}
        </p>
      </div>
      <div className={styles[`HomePage__profile`]}>
        <img
          src={cida}
          alt="Cida Calil"
          className={styles[`HomePage__avatar`]}
        ></img>
        <h2 className={styles[`HomePage__avatar--name`]}>Cida Calil - Diretora da CCalil Consultores</h2>
        <p className={styles[`HomePage__profile--text`]}>
          Experiência de <strong>mais de 35 anos</strong> em Recursos Humanos.{" "}
          <br></br>
          <br></br>
          Vivência profissional em empresas multinacionais e nacionais como:{" "}
          <strong>
            Laboratório Americano de Farmacoterapia (Farmasa), BCP/Claro, Bola
            Brasil (segmento esportivo) e Dow Química.
          </strong>{" "}
          <br></br>
          <br></br>
          Atua desde 2008 como Consultora na CCalil Consultores.<br></br>
          <br></br>
          <strong>Coach</strong> certificada pela Sociedade Brasileira de
          Coaching (SBC) e Pós Graduada em Gestão Empresarial.<br></br>
          <br></br>
          Teve participação direta do maior e mais rápido "start-up" - BCP (hoje
          Claro), com a{" "}
          <strong>
            contratação de cerca de 2.700 pessoas em apenas um ano.
          </strong>
          <br></br>
          <br></br>
          <strong>Fluente</strong> no Inglês.
        </p>
      </div>
      <div className={styles[`HomePage__values`]}>
      <CardText mt="mt" className={styles[`HomePage__values--card`]} list={cardInfo2} />
      </div>
      <CardDepo></CardDepo>
      <div className={styles[`HomePage__responsability`]}>
       
        <h2 className={styles[`HomePage__responsability--title`]}>Responsabilidade Social</h2>
        <img src={responsability} className={styles[`HomePage__img--mt`]} alt="responsibility"/>
        <h2 className={styles[`HomePage__responsability--subtitle`]} >Projeto Biblioteca Infanto-Juvenil - Associação Amigos Beija-Flor</h2>
        <p className={styles[`HomePage__responsability--text`]}>A CCalil Consultores apoia a Associação Amigos Beija-Flor desde a sua fundação, em 1999 e, transformação em Associação, em 2005. Participa de diversos projetos, como o Projeto Biblioteca Beija-Flor acima.
Caso queira saber mais sobre a Associação, clique <a>aqui.</a></p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
