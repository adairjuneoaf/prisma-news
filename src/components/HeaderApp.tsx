import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Content } from "../styles/components/HeaderApp";
import ButtonSingIn from "./ButtonSingIn";

const HeaderApp: React.FC = () => {
  const { route } = useRouter();

  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" className="imgLogo" alt="Logo do App prisma.news " />

        <nav className="menuNavigationApp">
          <Link href="/">
            <a className={route === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={route === "/posts" ? "active" : ""}>Posts</a>
          </Link>
        </nav>

        <ButtonSingIn />
      </Content>
    </Container>
  );
};

export default HeaderApp;
