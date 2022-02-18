import React from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import ButtonSingIn from "./ButtonSingIn";

import logo from "../../public/images/logo.svg";

import { Container, Content } from "../styles/components/HeaderApp";

const HeaderApp: React.FC = () => {
  const { route } = useRouter();

  return (
    <Container>
      <Content>
        <Image src={logo} width={144} height={80} className="imgLogo" alt="Logo do App prisma.news" />

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
