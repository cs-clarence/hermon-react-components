import c from "classnames";

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const defaults = {} satisfies CardProps;

const Card: React.FC<CardProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <div className={c("bg-surface rounded-medium p-8", props.className)}>
      {props.children}
    </div>
  );
};

export default Card;
