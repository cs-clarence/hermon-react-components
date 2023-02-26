import c from "classnames";
import {
  InteractionState,
  InteractionStateClasses,
} from "./interaction-states";

export type StateLayerProps = {
  state?: InteractionState;
};

const stateClasses: InteractionStateClasses = {
  enabled: "opacity-enabled-state-layer",
  activated: "opacity-activated-state-layer",
  disabled: "opacity-disabled-state-layer",
  hovered: "opacity-hovered-state-layer",
  focused: "opacity-focused-state-layer",
  pressed: "opacity-pressed-state-layer",
  dragged: "opacity-dragged-state-layer",
};

const StateLayer: React.FC<StateLayerProps> = (props: StateLayerProps) => {
  return (
    <div
      className={c(
        `
          absolute top-0 left-0
          w-full h-full
          bg-current
          opacity-enabled-state-layer
          group-hover:opacity-hovered-state-layer
          group-focus:opacity-focused-state-layer
          group-active:opacity-pressed-state-layer
          pointer-events-none
        `,
        stateClasses[props.state ?? "enabled"],
      )}
    ></div>
  );
};

export default StateLayer;
