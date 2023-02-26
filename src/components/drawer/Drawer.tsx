export interface DrawerProps {
  children: React.ReactNode;
}

const Menu: React.FC<DrawerProps> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default Menu;
