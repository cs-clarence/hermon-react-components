type KnownIconNames = "";

export interface IconProps {
  children?: string | KnownIconNames;
  variant?: "sharp" | "rounded" | "outlined";
}

const defaults: IconProps = {
  variant: "rounded",
};

const Icon: React.FC<IconProps> = (props) => {
  props = { ...defaults, ...props };
  return (
    <span className={`material-symbols-${props.variant}`}>
      {props.children}
    </span>
  );
};

export default Icon;
