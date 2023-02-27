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
import { useState } from "react";

const Page: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const menuItems: DrawerItemProps[] = [
    {
      children: "Home",
      href: "/",
      state: "selected",
      start: <Icon style="rounded">home</Icon>,
    },
    {
      children: "Members",
      href: "/",
      start: <Icon style="rounded">group</Icon>,
    },
    {
      children: "Organizations",
      href: "/",
      start: <Icon style="rounded">domain</Icon>,
    },
    {
      children: "My Store",
      href: "/",
      start: <Icon style="rounded">shopping_bag</Icon>,
    },
    {
      children: "Library",
      href: "/",
      start: <Icon style="rounded">library_books</Icon>,
    },
    {
      children: "News and Updates",
      href: "/",
      start: <Icon style="rounded">feed</Icon>,
    },
    {
      children: "Settings",
      href: "/",
      start: <Icon style="rounded">settings</Icon>,
    },
  ];

  return (
    <div className="flex flex-row gap-8 items-start">
      <div
        onClick={() => setShowDrawer((s) => !s)}
        className={c(
          `
            top-0
            left-0 
            fixed 
            z-50
            2xl:sticky 
            h-screen 
            2xl:block 
            2xl:pl-8
            w-full
            transition-colors
            duration-300
          `,
          showDrawer ? "bg-scrim/[20%]" : "bg-scrim/[0%] pointer-events-none",
        )}
      >
        <Drawer
          className={c(
            "w-72 h-full bg-surface p-4 transition-transform duration-300",
            showDrawer ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <img
            src={siteLogo}
            className="object-contain object-center hidden 2xl:block"
            alt="logo"
          />

          {menuItems.map((item, i) => (
            <DrawerItem {...item} key={i} />
          ))}
        </Drawer>
      </div>

      <div className="flex-grow px-8 pb-8">
        <TopAppBar
          className="p-8"
          start={
            <div className="flex flex-row gap-4 items-center 2xl:hidden">
              <button onClick={() => setShowDrawer((show) => !show)}>
                <Icon className="text-[42px]">menu</Icon>
              </button>
              <img
                src={siteLogo}
                className="object-contain object-center w-36"
                alt="logo"
              />
            </div>
          }
          end={
            <div className="hidden sm:flex flex-row gap-8 items-center text-on-surface-variant">
              <div>
                <Icon className="text-[42px]">notifications</Icon>
                <Badge className="absolute top-0 right-0">1</Badge>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Icon className="text-[42px]">account_circle</Icon>
                <div className="flex flex-col">
                  <p className="text-title-medium text-on-surface">
                    John Doe
                    <Icon className="text-[24px]">arrow_drop_down</Icon>
                  </p>
                  <p className="text-label-medium">Legacy Package</p>
                </div>
              </div>
            </div>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {/* Stats */}
          <Card className="!p-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 col-span-1 md:col-span-2 2xl:col-span-3">
            {/* Total Revenue */}
            <div className="flex flex-col gap-4 items-center border-r-2 border-outline-variant">
              <span className="text-label-large text-on-surface-variant align-middle flex flex-row items-center gap-2">
                <Icon className="text-success text-[42px]">
                  monetization_on
                </Icon>
                Total Revenue
              </span>
              <span className="text-headline-large font-medium">$ 140.00</span>
              <span className="text-label-small bg-success-container text-on-success-container p-1 px-4 rounded-full">
                +$100
                <Icon className="text-[16px]">arrow_upward</Icon>
              </span>
            </div>

            {/* Personal Volume */}
            <div className="flex flex-col gap-4 items-center border-r-2 border-outline-variant">
              <span className="text-label-large text-on-surface-variant align-middle flex flex-row items-center gap-2">
                <Icon className="text-primary text-[42px]">stars</Icon>
                Personal Volume
              </span>
              <span className="text-headline-large font-medium">20 PV</span>
              <span className="text-label-small bg-success-container text-on-success-container p-1 px-4 rounded-full">
                +20 PV
                <Icon className="text-[16px]">arrow_upward</Icon>
              </span>
            </div>

            {/* New Members */}
            <div className="flex flex-col gap-4 items-center border-r-2 border-outline-variant">
              <span className="text-label-large text-on-surface-variant align-middle flex flex-row items-center gap-2">
                <Icon className="text-orange text-[42px]">account_circle</Icon>
                New Members
              </span>
              <span className="text-headline-large font-medium">2</span>
              <span className="text-label-small bg-success-container text-on-success-container p-1 px-4 rounded-full">
                +2 Members
                <Icon className="text-[16px]">arrow_upward</Icon>
              </span>
            </div>

            {/* Account Status */}
            <div className="flex flex-col gap-4 items-center">
              <span className="text-label-large text-on-surface-variant align-middle flex flex-row items-center gap-2">
                <Icon className="text-red text-[42px]">favorite</Icon>
                Account Status
              </span>
              <span className="text-headline-large font-medium opacity-disabled-content">
                O Day
              </span>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-error text-title-large">Inactive</span>
                <span className="text-label-medium text-on-surface-variant">
                  Check out our Hermon Monthly Plan
                </span>
              </div>
            </div>
          </Card>

          {/* Weekly Cycles */}
          <Card className="col-span-1 md:col-span-2 flex flex-col gap-8">
            <div className="flex flex-row items-end">
              <h2 className="text-headline-large font-medium">Weekly Cycles</h2>
              <div className="flex-grow"></div>
              <img src={calendar} alt="graph" />
            </div>

            <div className="flex flex-row gap-4">
              <select className="bg-surface-variant rounded-extra-large px-6 py-4 w-40">
                <option>Year</option>
              </select>
              <select className="bg-surface-variant rounded-extra-large px-6 py-4 w-40">
                <option>Month</option>
              </select>
            </div>

            <div className="flex flex-row gap-4 justify-around overflow-y-scroll">
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
          </Card>

          {/* Weekly Profit */}
          <Card className="col-span-1 flex flex-col gap-12">
            <div className="flex flex-row items-end">
              <h2 className="text-headline-large font-medium">Weekly Profit</h2>
              <div className="flex-grow"></div>
              <img src={graph} alt="graph" />
            </div>

            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-start pb-6">Bonus</th>
                  <th className="text-start pb-6">Profit</th>
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
              <p className="text-success text-display-large font-medium text-center">
                $442.5
              </p>
              <p className="text-on-surface-variant text-center">
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
  );
};

export default Page;
