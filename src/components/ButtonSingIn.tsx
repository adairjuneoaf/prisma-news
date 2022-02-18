import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

import { Button } from "../styles/components/ButtonSingIn";

const ButtonSingIn: React.FC = () => {
  const { data } = useSession();

  console.log(data);

  function login() {
    signIn("github");
  }

  function logout() {
    signOut();
  }

  return data ? (
    <Button type="button" onClick={() => signOut()} title="Efetuar logout do app.">
      <FaGithub size={28} color={"#04D361"} /> {data.user?.name}
      <VscClose size={28} color={"#FFFFFF"} />
    </Button>
  ) : (
    <Button type="button" onClick={() => signIn("github")} title="Efetuar login no app com GitHub.">
      <FaGithub size={28} color={"#EBA417"} /> Login com GitHub
    </Button>
  );
};

export default ButtonSingIn;
