import { Drawer, DrawerItem, DrawerItemProps } from "$components";
import { Icon } from "$components";

const Page: React.FC = () => {
  const menuItems: DrawerItemProps[] = [
    {
      children: "Home",
      href: "/",
      state: "activated",
      start: <Icon variant="rounded">home</Icon>,
    },
    {
      children: "Members",
      href: "/",
    },
    {
      children: "Organizations",
      href: "/",
    },
    {
      children: "My Store",
      href: "/",
    },
    {
      children: "Library",
      href: "/",
    },
    {
      children: "News and Updates",
      href: "/",
    },
  ];
  return (
    <div>
      <Drawer>
        {menuItems.map((item) => (
          <DrawerItem {...item} />
        ))}
      </Drawer>
    </div>
  );
};

export default Page;
