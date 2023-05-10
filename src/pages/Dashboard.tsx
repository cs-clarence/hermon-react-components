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

export const DashboardPage: React.FC = () => {
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
    "border-on-surface-variant/[25%] border-b sm:border-b-0 sm:border-r last:border-b-0 sm:even:border-r-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0 py-16";

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
              <div className="flex flex-row items-center gap-3 bg-white/30 py-2 px-4 rounded-full">
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {/* Stats */}
            <Card className="col-span-1 grid !p-0 sm:grid-cols-2 md:col-span-2 xl:grid-cols-4 2xl:col-span-3">
              {/* Total Revenue */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon className="text-[42px] text-success">
                    monetization_on
                  </Icon>
                  Total Revenue
                </span>
                <span className="text-headline-large font-medium">
                  $ 140.00
                </span>
                <span className="rounded-full bg-success-container p-1 px-4 text-label-small text-on-success-container">
                  +$100
                  <Icon className="text-[16px]">arrow_upward</Icon>
                </span>
              </div>

              {/* Personal Volume */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon className="text-[42px] text-primary">stars</Icon>
                  Personal Volume
                </span>
                <span className="text-headline-large font-medium">20 PV</span>
                <span className="rounded-full bg-success-container p-1 px-4 text-label-small text-on-success-container">
                  +20 PV
                  <Icon className="text-[16px]">arrow_upward</Icon>
                </span>
              </div>

              {/* New Members */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon className="text-[42px] text-orange">
                    account_circle
                  </Icon>
                  New Members
                </span>
                <span className="text-headline-large font-medium">2</span>
                <span className="rounded-full bg-success-container p-1 px-4 text-label-small text-on-success-container">
                  +2 Members
                  <Icon className="text-[16px]">arrow_upward</Icon>
                </span>
              </div>

              {/* Account Status */}
              <div
                className={c(
                  "flex flex-col items-center gap-4",
                  statAdditionalClass,
                )}
              >
                <span className="flex flex-row items-center gap-2 align-middle text-label-large text-on-surface-variant">
                  <Icon className="text-[42px] text-red">favorite</Icon>
                  Account Status
                </span>
                <span className="text-headline-large font-medium opacity-disabled-content">
                  O Day
                </span>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-title-large text-error">Inactive</span>
                  <span className="text-label-medium text-on-surface-variant">
                    Check out our Hermon Monthly Plan
                  </span>
                </div>
              </div>
            </Card>

            {/* Weekly Cycles */}
            <Card className="col-span-1 flex flex-col gap-8 md:col-span-2">
              <div className="flex flex-row items-end">
                <h2 className="text-headline-large font-medium">
                  Weekly Cycles
                </h2>
                <div className="flex-grow"></div>
                <img
                  src={calendar}
                  alt="graph"
                />
              </div>

              <div className="flex flex-row gap-4">
                <select className="w-40 rounded-extra-large bg-surface-variant px-6 py-4">
                  <option>Year</option>
                </select>
                <select className="w-40 rounded-extra-large bg-surface-variant px-6 py-4">
                  <option>Month</option>
                </select>
              </div>

              <div className="overflow-y-scroll">
                <div className="flex min-w-max flex-row justify-around gap-4 pb-4">
                  <div className="flex flex-col items-center gap-2">
                    <Cycle />
                    <p className="text-label-large">Week 1</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cycle selected={true} />
                    <p className="text-label-large">Week 2</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cycle />
                    <p className="text-label-large">Week 3</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cycle />
                    <p className="text-label-large">Week 4</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Weekly Profit */}
            <Card className="col-span-1 flex flex-col gap-12">
              <div className="flex flex-row items-end">
                <h2 className="text-headline-large font-medium">
                  Weekly Profit
                </h2>
                <div className="flex-grow"></div>
                <img
                  src={graph}
                  alt="graph"
                />
              </div>

              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="pb-6 text-start">Bonus</th>
                    <th className="pb-6 text-start">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-start font-medium">Fast Track Bonus</th>
                    <td>$250</td>
                  </tr>
                  <tr>
                    <th className="text-start font-medium">Cycle Bonus</th>
                    <td>$62.50</td>
                  </tr>
                  <tr>
                    <th className="text-start font-medium">Good Life Bonus</th>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <th className="text-start font-medium">
                      Leadership Legacy Bonus
                    </th>
                    <td>$40</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col gap-4">
                <p className="font-medium">Est. Week Total</p>
                <p className="text-center text-display-large font-medium text-success">
                  $442.5
                </p>
                <p className="text-center text-on-surface-variant">
                  All profit will be transfered to your Hermon Wallet
                  automatically.
                </p>
              </div>
            </Card>

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
