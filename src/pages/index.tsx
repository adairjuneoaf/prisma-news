import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import ButtonSubscribe from "../components/ButtonSubscribe";
import stripe from "../services/stripe";
import { Container, Content } from "../styles/pages/index";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

type ProductType = {
  priceId: string;
  amount: string;
};

const Home: NextPage<HomeProps> = ({ product }) => {
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
            <span className="highlightInformation">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.amount / 100)}
              por mês
            </span>
          </p>

          <ButtonSubscribe priceId={product.priceId} />
        </aside>
        <Image src="/images/avatar.svg" width={640} height={640} className="imagePageHome" alt="Imagem que representa o conteúdo do App." />
      </Content>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KUCXsBXMNyP7okW5XADbNlj", {
    expand: ["product"], //A propriedade EXPAND entrega mais informações do produto criado lá no painel do Stripe.
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount,
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 Horas
  };
};

export default Home;
