import type { NextPage } from "next";
import Link from "next/link";

import { Container, Content } from "../styles/pages/404";

const Custom404: NextPage = () => {
  return (
    <Container>
      <Content>
        <h1>404</h1>
        <h3>PAGE NOT FOUND</h3>
        <Link href="/">
          <a title="Ir para página Home">Home</a>
        </Link>
      </Content>
    </Container>
  );
};

export default Custom404;
