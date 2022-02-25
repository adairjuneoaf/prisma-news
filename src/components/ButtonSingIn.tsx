import React from "react";

import { signIn, useSession } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

import { Button } from "../styles/components/ButtonSingIn";
import Link from "next/link";

const ButtonSingIn: React.FC = () => {
  const { data } = useSession();

  return data ? (
    <Link href={"/profile"} passHref>
      <Button type="button" title="ir até o perfil de usuário">
        <FaGithub size={28} color={"#04D361"} /> {data.user?.name}
        {/* <VscClose size={28} color={"#FFFFFF"} /> */}
      </Button>
    </Link>
  ) : (
    <Button type="button" onClick={() => signIn("github")} title="Efetuar login no app com GitHub.">
      <FaGithub size={28} color={"#EBA417"} /> Login com GitHub
    </Button>
  );
};

export default ButtonSingIn;
