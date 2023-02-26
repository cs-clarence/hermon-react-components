export interface CardProps {}

const defaults: CardProps = {};

const Card: React.FC<CardProps> = (props) => {
  props = { ...defaults, ...props };

  return <div></div>;
};

export default Card;
