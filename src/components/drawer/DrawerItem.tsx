import { InteractionStateClasses, InteractionState } from "$components";
import c from "classnames";

export interface DrawerItemProps {
  children?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  state?: InteractionState;
}

const defaults: DrawerItemProps = {
  state: "enabled",
};

const stateClasses: InteractionStateClasses = {
  selected: "text-on-primary bg-gradient-to-r from-[#1B4965] to-[#BEE9E8]",
  enabled: "text-on-surface-variant",
};

const DrawerItem: React.FC<DrawerItemProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <div
      className={c(
        `flex px-6 py-4 flex-row items-center gap-4 min-h-[52px] rounded-large text-label-large overflow-clip group font-bold`,
        stateClasses[props.state ?? "enabled"],
      )}
    >
      <div>{props.leading}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default DrawerItem;
