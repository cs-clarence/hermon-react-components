import r from "classnames";

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

const defaults = {} satisfies BadgeProps;

const Badge: React.FC<BadgeProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <span
      className={r(
        "inline-flex items-center justify-center rounded-full w-5 h-5 text-label-small bg-primary text-on-primary",
        props.className,
      )}
    >
      {props.children}
    </span>
  );
};

export default Badge;
