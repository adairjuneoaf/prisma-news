import type { NextPage } from "next";
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

          <button>Inscrever agora</button>
        </aside>

        <img src="/images/avatar.svg" alt="Imagem que representa o conteúdo do App." />
      </Content>
    </Container>
  );
};

export default Home;
