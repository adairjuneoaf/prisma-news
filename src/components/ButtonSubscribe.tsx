import { Container } from "../styles/components/ButtonSubscribe";

interface ButtonSubscribeProps {
  priceId: string;
}

const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ priceId }) => {
  return <Container type="button">Inscreva-se agora</Container>;
};

export default ButtonSubscribe;
