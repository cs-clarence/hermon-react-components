export type NodeBuilder<Props extends Record<string, unknown>> = (
  props: Props,
) => React.ReactNode;
