import { siteLogo } from "$assets";
import { Badge, Drawer, DrawerItem, Icon, TopAppBar } from "$components";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import c from "classnames";

export function DashboardLayout() {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showDrawer ? "hidden" : "unset";
  }, [showDrawer]);

  const handleResize = () => {
    if (window.innerWidth >= 1536) {
      setShowDrawer(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const menuItems = [
    {
      children: "Home",
      href: "/home",
      state: "selected",
      iconCode: "home",
    },
    {
      children: "Members",
      href: "/members",
      iconCode: "group",
    },
    {
      children: "My Store",
      href: "/my-store",
      iconCode: "shopping_bag",
    },
    {
      children: "News and Updates",
      href: "/news-and-updates",
      iconCode: "feed",
    },
    {
      children: "Settings",
      href: "/settings",
      iconCode: "settings",
    },
  ];

  const drawer = (
    <Drawer>
      {menuItems.map((item, i) => (
        <NavLink
          to={item.href}
          key={i}
        >
          {({ isActive }) => (
            <DrawerItem
              state={isActive ? "selected" : undefined}
              key={i}
              leading={<Icon filled={isActive}>{item.iconCode}</Icon>}
            >
              {item.children}
            </DrawerItem>
          )}
        </NavLink>
      ))}
    </Drawer>
  );

  return (
    <div className="flex flex-row items-start gap-8">
      <div
        onClick={() => setShowDrawer((s) => !s)}
        className={c(
          `
            fixed
            top-0
            left-0
            z-50
            h-screen
            w-full
            transition-colors
            duration-300
2xl:hidden
          `,
          showDrawer ? "bg-scrim/[20%]" : "pointer-events-none bg-scrim/[0%]",
        )}
      >
        <div
          className={c(
            "pointer-events-auto h-full w-72 bg-surface p-4 transition-transform duration-300 2xl:translate-x-0 2xl:bg-transparent",
            showDrawer ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {drawer}
        </div>
      </div>

      <div className="flex w-full flex-grow flex-col gap-8">
        {/* Header */}
        <TopAppBar
          className={c("py-4 text-on-surface-variant sm:px-4")}
          start={
            <div className="flex flex-row items-center gap-4">
              <button
                className="2xl:hidden"
                onClick={() => setShowDrawer((show) => !show)}
              >
                <Icon className="text-[42px]">menu</Icon>
              </button>
              <img
                src={siteLogo}
                className="hidden sm:block h-12 object-contain object-center"
                alt="logo"
              />
            </div>
          }
          end={
            // Notifications and Account
            <div className="flex flex-row items-center gap-4 sm:gap-8">
              <div className="relative">
                <Icon
                  className="text-[42px]"
                  filled
                >
                  notifications
                </Icon>
                <Badge className="absolute top-0 right-0">1</Badge>
              </div>
              <div className="flex flex-row items-center gap-3 bg-white/30 p-2 pr-6 rounded-full">
                <Icon
                  className="text-[42px]"
                  filled
                >
                  account_circle
                </Icon>
                <div className="hidden flex-col sm:flex">
                  <p className="text-title-medium text-on-primary">
                    John Doe
                    <Icon className="text-[24px]">arrow_drop_down</Icon>
                  </p>
                  <p className="text-label-medium">Legacy Package</p>
                </div>
              </div>
            </div>
          }
        />
        <div className="container mx-auto flex flex-row gap-8">
          <div className="min-w-[280px] top-0 left-0 hidden 2xl:block">
            {drawer}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
