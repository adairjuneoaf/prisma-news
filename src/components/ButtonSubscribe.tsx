import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../services/api";
import { getStripeJs } from "../services/stripe-js";
import { Button } from "../styles/components/ButtonSubscribe";

const ButtonSubscribe: React.FC = () => {
  const { data } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!data) {
      signIn("github");
      return;
    }

    if (data.subscriptionUser) {
      return router.push("/posts");
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({ sessionId: sessionId });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button type="button" onClick={handleSubscribe} title="Me inscrever agora!">
      Inscreva-se agora
    </Button>
  );
};

export default ButtonSubscribe;
