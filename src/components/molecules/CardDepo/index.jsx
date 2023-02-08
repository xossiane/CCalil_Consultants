import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./styles.module.scss";



function CardDepo() {

  const depoimentos =
    [
      {
        "id": 0,
        "autor": "Marcos Moura",
        "texto": "A Cida é uma rara profissional, que como poucos, é capaz de manter uma visão integral sobre o processo de colocação profissional. Cida consegue conciliar a eficácia e precisão necessárias para mapear candidatos aderentes às exigências e qualificações esperadas para a posição, ao mesmo tempo que demonstra um profundo cuidado e atenção individual a cada profissional envolvido no processo, proporcionando uma experiência eficiente, ágil, transparente, e acima de tudo, humana."
      },
      {
        "id": 1,
        "autor": "Silvana",
        "texto": "No ano de 2013, fiquei desempregada! Como sou sozinha aqui em São Paulo, entrei em desespero por medo de ficar muito tempo sem trabalhar! Por influência de uma amiga, cadastrei o meu  currículo no Infojobs e para minha surpresa, a  empresa C.Calil Consultores, me chamou para uma entrevista. Essa entrevista mudaria a minha vida, fui selecionada e escolhida pela empresa, a qual trabalho há 10 anos. Sou muita grata pela oportunidade, e pela forma como fui recebida desde do início. Obrigada C.Calil, essa vaga de emprego mudou minha vida para melhor."
      },
      {
        "id": 2,
        "autor": "Karen Ramalho Quilici",
        "texto": "Na minha entrevista eu estava super nervosa, ansiosa e a Cidinha me deixou muito a vontade, super profissional, acolhedora. She takes care of people! Acho que essa frase resume a Cidinha."
      },
      {
        "id": 3,
        "autor": "Luciana Fabbris",
        "texto": "Eu participei de um processo seletivo que foi gerenciado pela Cida Calil, que foi extremamente atenciosa, eficiente e de alto nivel profisdional ao conduzir o processo. Recomendo fortemente C Calil Consultores, uma empresa extremamente humana e de alta qualidade."
      },
      {
        "id": 4,
        "autor": "Mirian Prado",
        "texto": "Há 5 anos fui encontrada pela Cidinha para participar de um processo seletivo. O processo seletivo foi incrível, o carisma e profissionalismo que ela trata o candidato é algo único. Eu passei no processo seletivo e estou há 5 anos em uma indústria química. Muito obrigada por ter me achado Cidinha. Como sempre falei, te considero a minha fada madrinha, pois abriu as portas para a melhor oportunidade profissional da minha vida. Te desejo sucesso, você merece! Sou muito grata a Deus por você ter me encontrado."
      },
      {
        "id": 5,
        "autor": "Sandra Calabria",
        "texto": "Trabalhei com a Cidinha no RH da BCP Telecom, agora Claro, em São Paulo durante alguns anos. Ela é proativa, dedicada e possui fortes competências técnicas e comportamentais principalmente em seleção de pessoas, além de uma excelente visão estratégica e financeira. Adicionalmente, a Cidinha tem qualidades e valores enquanto pessoa que considero essenciais para atingir qualquer resultado. Recomendo definitivamente a execução e entrega do seu trabalho."
      },
      {
        "id": 6,
        "autor": "Fátima Valéria Freire de Carvalho",
        "texto": "Conheci Cida Calil num processo de seleção para a empresa que trabalho hoje e desde o primeiro contato, Cida foi extremamente humana e acolhedora. Diferentemente dos recrutadores que te avaliam filtrando, Cida ao ver potencial no candidato orienta para que possamos passar pelo processo com o maior aproveitamento possível. Se eu não tivesse conseguido a vaga, já seria grata de antemão por ter tido o privilégio de ter encontrado um dia a profissional Cida Calil, hoje uma grande amiga que vibra com cada vitória do seu candidato."
      },
      {
        "id": 7,
        "autor": "Alessandro Calor",
        "texto": "Desde o primeiro contato que tivemos, a Cida foi muito atenciosa, explicando a oportunidade e condições. Também durante o processo, sempre identificando e orientando sobre as fases. Muito obrigado! Sua orientação e condução foram fundamentais e me assistiram muito."
      },
      {
        "id": 8,
        "autor": "Renan Veloso",
        "texto": "Sou muito grato pelo contato da Cida quando há 5 anos consegui encontrar a vaga perfeita e acredito que a empresa também esteja satisfeita. Eu sempre me dediquei nos meus trabalhos mas faltava encontrar um lugar que me reconhecesse. Estou muito feliz na empresa e isso refletiu na minha vida pessoal. Só tenho a agradecer à C.Calil."
      },
      {
        "id": 9,
        "autor": "Rogério Salina",
        "texto": "Me recoloquei em uma empresa multinacional pela competência, amplo conhecimento e principalmente pelo suporte recebido da 'Cida'. Elo perfeito entre candidato-empresa!"
      },
      {
        "id": 10,
        "autor": "Karina Eliane Portela",
        "texto": "Era um domingo a noite umas 23 horas o fantástico acabava e eu nao estava com aquela sensação de final de domingo e segunda começaria tudo de novo.. pois estava desempregada. O telefone celular tocou e estranhei o horário e atendi e por surpresa era uma headhunter se desculpando pelo Horário e se poderíamos conversar um pouco. Trocamos algumas palavras ela me explicou que estava de férias nos Estados Unidos mas era um processo urgente. Que alegria aquela ligação. Aquela sensibilidade de saber que mesmo num domingo as 23 hrs ligar para alguém participar de um processo seletivo era muito especial. E foi assim que conheci a Cidinha e sinceramente me apaixonei.   Além de headhunter ela cuida da gente na empresa. E isso faz 7 anos e toda vez que nos encontramos lembramos com muito carinho e risos daquele domingo a noite. Cidinha você planta a semente e rega, depois é com a gente. Mas o cuidado que você cuida daquela semente é muito especial."
      },
      {
        "id": 11,
        "autor": "Veruschka C. Mojica",
        "texto": "Quando procurada pela Cida Calil já senti que havia um diferencial, logo no primeiro contato. Sem rodeios e mistérios, o objetivo era encontrar o melhor para todos, empresa e candidato. Além de todo acolhimento e vibração durante todo o processo."
      },
      {
        "id": 12,
        "autor": "José Eduardo Chamon",
        "texto": "Já tive experiência como candidato, sendo atendido pela l Cida Calil em 1998 na empresa BCP, hoje Claro. Super profissional, humana e me deixou bem a vontade na entrevista, correndo de forma muito tranquila. Falamos sobre diversos assuntos, parecia que já nos conhecíamos há anos. Foi uma experiência incrível e o melhor, é que no final além de ter sido aprovado, criamos uma amizade que dura desde então. Juntos participamos da crianção de uma associação de voluntariado que existe até hoje, Associação Amigo Beija-Flor. Muito responsável e profissional, tornou-se uma de minhas melhores amigas. Cida, não é só uma head hunter, é uma amiga, é altruísta, preocupada com o bem estar do próximo e onde houver uma vaga, ela saberá encontrar o melhor candidato."
      }
    ]

  return (
    <div id="depoimentos" className={styles[`CardDepo`]}>
      <div className={styles[`CardDepo__container`]}>
        <h2 className={styles[`CardDepo__title`]}>A CCalil Consultores sob o olhar dos clientes e candidatos.</h2>
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

          {depoimentos.map(item => (
            <div className={styles['CardDepo__content']} key={item.id}>
              <h1 className={styles['CardDepo__text']}>{item.texto}</h1>
              <p className={styles['CardDepo__author']}>{item.autor}</p>)
            </div>)
          )}

        </Carousel>
      </div>


    </div>
  );
}

export default CardDepo;
