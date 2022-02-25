import { GetServerSideProps, NextPage } from "next";
import { DefaultSession } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";

import { Container, Content } from "../styles/pages/profile";
import { useRouter } from "next/router";
import Head from "next/head";

interface SessionType extends DefaultSession {
  subscriptionUser: {
    data: {
      subscriptionId: string;
      subscriptionStatus: string;
      subscriptionExpirationDate: number;
    };
  };
}

interface ProfileProps {
  userData: {
    user: {
      name: string;
      email: string;
      image: string;
    };
    subscriptionUser: {
      subscriptionId: string;
      subscriptionStatus: string;
      subscriptionExpirationDate: string;
    };
  };
}

const Profile: NextPage<ProfileProps> = ({ userData }) => {
  const router = useRouter();

  async function logoutUser() {
    await signOut();
    router.push("/");
  }

  return (
    <Container>
      <Head>
        <title>prisma.news | Perfil de Usuário</title>
      </Head>
      <Content>
        <div className="user">
          <div className="imageProfile">
            <Image src={userData.user.image} width={128} height={128} alt="Imagem de perfil do usuário" />
          </div>
          <div className="data">
            <h3>{userData.user.name}</h3>
            <p>{userData.user.email}</p>
          </div>
        </div>

        <div className="subscription">
          <h1>Inscrição prisma.news</h1>
          <span className="id">
            ID: <p>{userData.subscriptionUser.subscriptionId}</p>
          </span>
          <span className="status">
            Status: <div className={userData.subscriptionUser.subscriptionStatus === "active" ? "indicatorStatus active" : "indicatorStatus inactive"}></div>
            <p>{userData.subscriptionUser.subscriptionStatus === "active" ? "Ativa" : "Inativa"}</p>
          </span>
          <span className="expiration">
            Data de expiração:
            <p>
              {userData.subscriptionUser.subscriptionExpirationDate === "0"
                ? "Não existe"
                : format(new Date(Number(userData.subscriptionUser.subscriptionExpirationDate) * 1000), "d MMMM yyyy", {
                    locale: ptBR,
                  })}
            </p>
          </span>
        </div>

        <button type="button" onClick={logoutUser} className="buttonLogout" title="Efetuar logout do app.">
          Logout
        </button>
      </Content>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { subscriptionUser } = session as SessionType;

  if (!subscriptionUser) {
    const userData = {
      user: {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
      },
      subscriptionUser: {
        subscriptionId: "Não existe",
        subscriptionStatus: "Inativa",
        subscriptionExpirationDate: "0",
      },
    };

    return {
      props: {
        userData,
      },
    };
  }

  const userData = {
    user: {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    },
    subscriptionUser: {
      subscriptionId: subscriptionUser.data.subscriptionId,
      subscriptionStatus: subscriptionUser.data.subscriptionStatus,
      subscriptionExpirationDate: subscriptionUser.data.subscriptionExpirationDate,
    },
  };

  return {
    props: { userData },
  };
};

export default Profile;
function parseISO(published_at: any): number | Date {
  throw new Error("Function not implemented.");
}
