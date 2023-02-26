import { useEffect, useState } from "react";

export type InteractionState =
  | "enabled"
  | "disabled"
  | "dragged"
  | "pressed"
  | "hovered"
  | "activated"
  | "selected"
  | "focused";

export type InteractionStateClasses = Partial<
  Record<Exclude<InteractionState, "enabled">, string>
> & { enabled: string };

export function useInteractionState(
  el: HTMLElement | undefined,
): InteractionState {
  const [interactionState, setInteractionState] =
    useState<InteractionState>("enabled");

  const handleMouseEnter = () => {
    setInteractionState("hovered");
  };

  const handleMouseLeave = () => {
    setInteractionState("enabled");
  };

  const handleMouseDown = () => {
    setInteractionState("pressed");
  };

  const handleMouseUp = () => {
    setInteractionState("hovered");
  };

  const handleFocus = () => {
    setInteractionState("focused");
  };

  const handleDragStart = () => {
    setInteractionState("dragged");
  };

  const handleDragEnd = () => {
    setInteractionState("enabled");
  };

  useEffect(() => {
    if (!el) return;

    el.addEventListener("mouseenter", handleMouseEnter);

    el.addEventListener("mouseleave", handleMouseLeave);

    el.addEventListener("mousedown", handleMouseDown);

    el.addEventListener("mouseup", handleMouseUp);

    el.addEventListener("focus", handleFocus);

    el.addEventListener("dragstart", handleDragStart);

    el.addEventListener("dragend", handleDragEnd);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("focus", handleFocus);
      el.removeEventListener("dragstart", handleDragStart);
      el.removeEventListener("dragend", handleDragEnd);
    };
  }, []);

  return interactionState;
}
