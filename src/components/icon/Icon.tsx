import c from "classnames";

type KnownIconNames = "";

export interface IconProps {
  children?: string | KnownIconNames;
  style?: "sharp" | "rounded" | "outlined";
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  opticalSize?: 20 | 24 | 40 | 48;
  className?: string;
}

const defaults = {
  style: "rounded",
} satisfies IconProps;

const Icon: React.FC<IconProps> = (props) => {
  props = { ...defaults, ...props };
  return (
    <span
      style={{
        "--m3-icon-weight": props.weight,
        "--m3-icon-grade": props.grade,
        "--m3-icon-optical-size": props.opticalSize,
        "--m3-icon-fill":
          props.filled !== undefined ? (props.filled ? 1 : 0) : undefined,
      }}
      className={c(`material-symbols-${props.style}`, props.className)}
    >
      {props.children}
    </span>
  );
};

export default Icon;
