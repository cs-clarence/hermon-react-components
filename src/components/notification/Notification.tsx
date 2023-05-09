import { InteractionState, StateLayer } from "$components/common";
import { Icon } from "$components/icon";
import c from "classnames";

export interface NotificationProps {
  children?: React.ReactNode;
  className?: string;
  state?: InteractionState;
  topLabel?: React.ReactNode;
  bottomLabel?: React.ReactNode;
  icon?: React.ReactNode;
}

const defaults = {} satisfies NotificationProps;

const Notification: React.FC<NotificationProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <div
      className={c(
        "p-4 rounded-large flex flex-row items-center gap-4 group overflow-clip hover:cursor-pointer h-32",
        props.className,
      )}
    >
      <div className="rounded-full overflow-clip aspect-square w-12">
        {props.icon ?? <Icon className="text-[48px] text-orange">info</Icon>}
      </div>
      <div className="flex flex-col gap-2">
        <div>
          {props.topLabel && (
            <p className="text-on-surface-variant text-label-medium">
              {props.topLabel ?? "New Connection"}
            </p>
          )}
          <div className="text-body-large text-on-surface">
            {props.children ?? "New Connection"}
          </div>
        </div>

        {props.bottomLabel && (
          <div className="text-on-surface-variant text-label-small">
            {props.bottomLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
