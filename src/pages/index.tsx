import type { NextPage } from "next";
import Image from "next/image";
import ButtonSubscribe from "../components/ButtonSubscribe";
import { Container, Content } from "../styles/pages/index";

const Home: NextPage = () => {
  return (
    <Container>
      <Content>
        <aside>
          <h3>👋 Hey, bem vindo!</h3>
          <h1>
            Notícias a cerca
            <br />
            do universo <span className="highlightInformation">React</span>
          </h1>
          <p>
            Garanta já o seu acesso a todas as publicações por apenas <br />
            <span className="highlightInformation">R$ 4,90 por mês</span>
          </p>

          <ButtonSubscribe />
        </aside>
        <Image src="/images/avatar.svg" width={640} height={640} className="imagePageHome" alt="Imagem que representa o conteúdo do App." />
      </Content>
    </Container>
  );
};

export default Home;
