import React from "react";

import { FaGithub } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

import { Container } from "../styles/components/ButtonSingIn";

const ButtonSingIn: React.FC = () => {
  const isUserLogged: boolean = true;

  return isUserLogged ? (
    <Container type="button">
      <FaGithub size={28} color={"#04D361"} /> Adair Juneo
      <VscClose size={28} color={"#FFFFFF"} />
    </Container>
  ) : (
    <Container type="button">
      <FaGithub size={28} color={"#EBA417"} /> Login com GitHub
    </Container>
  );
};

export default ButtonSingIn;
