import { InterationStates } from "$components";
import c from "classnames";

export interface DrawerItemProps {
  href: string;
  children?: React.ReactNode;
  start?: React.ReactNode;
  end?: React.ReactNode;
  state?: InterationStates;
}

const defaults: DrawerItemProps = {
  state: "enabled",
  href: "#",
};

const MenuItem: React.FC<DrawerItemProps> = (props) => {
  props = { ...defaults, ...props };
  return (
    <a
      href={props.href}
      className={c(
        "flex px-6 py-4 flex-row items-center gap-4 min-h-[52px] rounded-large text-label-large",
        {
          "text-on-surface-variant": props.state === "enabled",
          "text-on-primary bg-primary": props.state === "activated",
        },
      )}
    >
      <div>{props.start}</div>
      <div>{props.children}</div>
    </a>
  );
};

export default MenuItem;
