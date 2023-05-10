import { calendar, graph, siteLogo } from "$assets";
import {
  Drawer,
  DrawerItem,
  DrawerItemProps,
  Notification,
  TopAppBar,
} from "$components";
import { Icon } from "$components";
import { Badge } from "$components/badge";
import { Card } from "$components/card";
import { Cycle } from "$components/cycle";
import c from "classnames";
import { useEffect, useState } from "react";
import "../index.postcss";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC = () => {
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
      href: "/shopping-bag",
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

  const statAdditionalClass =
    "border-on-surface-variant/[25%] border-b sm:border-b-0 sm:border-r last:border-b-0 sm:even:border-r-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0 p-6";

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

        {/* Content */}

        <div className="container mx-auto flex flex-row gap-8">
          <div className="min-w-[280px] top-0 left-0 hidden 2xl:block">
            {drawer}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Stats */}
            <Card className="col-span-1 grid !p-0 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3">
              {/* Total Revenue */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex place-self-start flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon
                    className="text-[42px] text-success"
                    filled
                  >
                    monetization_on
                  </Icon>
                  Total Revenue
                </span>
                <span className="text-headline-large font-medium">
                  <span className="text-on-surface-variant/50">$</span>
                  140.00
                </span>
                <span className="rounded-full place-self-end bg-success-container p-1 px-4 text-label-small text-on-success-container">
                  +$100
                  <Icon className="text-[16px]">arrow_upward</Icon>
                </span>
              </div>
              {/* Paid Commission */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex place-self-start flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon
                    className="text-[42px] text-success"
                    filled
                  >
                    currency_exchange
                  </Icon>
                  Paid Commissions
                </span>
                <span className="text-headline-large font-medium">
                  <span className="text-on-surface-variant/50">$</span>
                  140.00
                </span>
                <span className="rounded-full place-self-end bg-success-container p-1 px-4 text-label-small text-on-success-container">
                  +$100
                  <Icon className="text-[16px]">arrow_upward</Icon>
                </span>
              </div>
              {/*  */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex place-self-start flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon className="text-[42px] text-primary">credit_card</Icon>
                  Current Balance
                </span>
                <span className="text-headline-large font-medium">
                  <span className="text-on-surface-variant/50">$</span>
                  140.00
                </span>
              </div>
            </Card>

            <div className="grid grid-cols-2 col-span-1 lg:col-span-2 gap-4">
              <Card className="!p-0 overflow-clip max-h-[300px]">
                <div className="bg-gradient-to-r from-[#1B4965] to-[#BEE9E8] text-on-primary font-medium text-title-large p-6">
                  Hermon Wallet
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <div className="flex flex-col">
                    <span className="text-label-large text-on-surface-variant">
                      Available Balance
                    </span>
                    <span className="text-headline-large font-medium">
                      <span className="text-on-surface-variant/50">$</span>
                      140.00
                    </span>
                  </div>

                  <div className="flex flex-row justify-evenly gap-4 w-full">
                    <div className="flex flex-col gap-1 items-center">
                      <Icon
                        opticalSize={40}
                        className="text-on-surface-variant text-[40px] rounded-large border-outline-variant border-2 p-2"
                      >
                        arrow_circle_up
                      </Icon>
                      <span className="text-on-surface-variant text-label-medium">
                        Send
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <Icon
                        opticalSize={40}
                        className="text-on-surface-variant text-[40px] rounded-large border-outline-variant border-2 p-2"
                      >
                        place_item
                      </Icon>
                      <span className="text-on-surface-variant text-label-medium">
                        Receive
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <Icon
                        opticalSize={40}
                        className="text-on-surface-variant text-[40px] rounded-large border-outline-variant border-2 p-2"
                      >
                        receipt_long
                      </Icon>
                      <span className="text-on-surface-variant text-label-medium">
                        Recent
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <Icon
                        opticalSize={40}
                        className="text-on-surface-variant text-[40px] rounded-large border-outline-variant border-2 p-2"
                      >
                        settings
                      </Icon>
                      <span className="text-on-surface-variant text-label-medium">
                        Receive
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="!p-0 overflow-clip max-h-[300px]">
                <div className="bg-gradient-to-r from-[#1B4965] to-[#BEE9E8] text-on-primary font-medium text-title-large p-6">
                  Hermon Incentives
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <div className="flex flex-col text-label-large text-on-surface-variant">
                    Sell your 1st 1,000 Bottles to get your <br />
                    $100 from Hermon!
                  </div>

                  <div className="flex flex-row justify-evenly gap-4 w-full"></div>
                </div>
              </Card>

              <Card className="col-span-2"></Card>
            </div>

            {/* Activities */}
            <Card className="col-span-1 flex flex-col gap-4">
              <div className="flex flex-row items-end">
                <h2 className="text-headline-small font-medium">Activities</h2>
                <div className="flex-grow"></div>
              </div>

              <div className="flex flex-col">
                <Notification
                  icon={
                    <Icon className="text-[48px] text-orange">
                      account_circle
                    </Icon>
                  }
                  topLabel={
                    <p className="text-orange">
                      <Icon className="text-[16px]">person_add</Icon>New Member
                    </p>
                  }
                  bottomLabel={<p>Just Now</p>}
                >
                  <p>
                    <span className="font-semibold">Jarod John Juco</span> has
                    joined your network.
                  </p>
                </Notification>

                <Notification
                  icon={
                    <Icon className="text-[48px] text-orange">
                      account_circle
                    </Icon>
                  }
                  topLabel={
                    <p className="text-orange">
                      <Icon className="text-[16px]">person_add</Icon>New Member
                    </p>
                  }
                  bottomLabel={<p>Just Now</p>}
                >
                  <p>
                    <span className="font-semibold">Shalom Samonte</span> has
                    joined your network.
                  </p>
                </Notification>

                <Notification
                  icon={<Icon className="text-[48px] text-success">stars</Icon>}
                  topLabel={
                    <p className="text-success">
                      <Icon className="text-[16px]">shopping_cart</Icon>Purchase
                      Complete
                    </p>
                  }
                  bottomLabel={<p>Just Now</p>}
                >
                  <p>
                    <span className="font-semibold">
                      You got 20 Personal Volume
                    </span>{" "}
                    from 1 Bottle of ProbioX.
                  </p>
                </Notification>

                <Notification
                  icon={<Icon className="text-[48px] text-warning">info</Icon>}
                  topLabel={
                    <p className="text-warning">
                      <Icon className="text-[16px]">info</Icon>Warning
                    </p>
                  }
                  bottomLabel={<p>Just Now</p>}
                >
                  <p>
                    <span className="font-semibold">
                      Oh no! You only got 7 days left!
                    </span>{" "}
                    Check your account immediately.
                  </p>
                </Notification>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
