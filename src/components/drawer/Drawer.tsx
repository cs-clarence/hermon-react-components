import c from "classnames";

export interface DrawerProps {
  children?: React.ReactNode;
  className?: string;
}

const defaults: DrawerProps = {};

const Drawer: React.FC<DrawerProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <nav className={c("flex flex-col gap-4", props.className)}>
      {props.children}
    </nav>
  );
};

export default Drawer;
