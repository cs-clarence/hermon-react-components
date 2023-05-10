import { Notification } from "$components";
import { Icon } from "$components";
import { Card } from "$components/card";
import c from "classnames";
import { useRef, useState } from "react";

function AffiliateCardContent() {
  const [showLink, setShowLink] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-title-large">
          Your Hermon affiliate link
        </p>
        <p className="text-on-surface-variant">
          Your journey starts here! Share your link now.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <div className="w-full flex flex-row items-center gap-4">
          <input
            ref={inputRef}
            value="https://hermonsystems.com/retailStore/23"
            readOnly
            type={showLink ? "text" : "password"}
            className="bg-surface-variant rounded-full px-4 py-2 text-body-medium text-on-surface-variant w-full"
          />
          <Icon
            filled
            onClick={() => setShowLink((s) => !s)}
            className="text-on-surface-variant text-[32px] select-none cursor-pointer"
          >
            {showLink ? "visibility_off" : "visibility"}
          </Icon>
        </div>
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(inputRef.current?.value ?? "");
            alert("Affiliate link has been copied!");
          }}
          className="text-on-primary min-w-[220px] min-h-[48px] rounded-full bg-gradient-to-r from-[#1B4965] to-[#BEE9E8]"
        >
          Copy link
        </button>
      </div>
    </>
  );
}

export const HomePage: React.FC = () => {
  const statAdditionalClass =
    "border-on-surface-variant/[25%] border-b sm:border-b-0 sm:border-r last:border-b-0 sm:even:border-r-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0 p-6";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Stats */}
      <Card className="col-span-1 grid !p-0 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3">
        {/* Total Revenue */}
        <div
          className={c("flex flex-col items-center gap-4", statAdditionalClass)}
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
          className={c("flex flex-col items-center gap-4", statAdditionalClass)}
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
          className={c("flex flex-col items-center gap-4", statAdditionalClass)}
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
        <Card className="!p-0 overflow-clip max">
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
                  Setup
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="!p-0 overflow-clip">
          <div className="bg-gradient-to-r from-[#1B4965] to-[#BEE9E8] text-on-primary font-medium text-title-large p-6">
            Hermon Incentives
          </div>
          <div className="p-6 flex flex-col gap-8">
            <div className="flex flex-col text-label-large text-on-surface-variant">
              Sell your 1st 1,000 Bottles to get your <br />
              $100 from Hermon!
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-evenly gap-4 w-full">
                <div className="flex flex-row justify-between w-full font-bold">
                  <p>Sell 1,000 Bottles</p>
                  <p>4%</p>
                </div>
              </div>
              <div className="w-full h-4 bg-surface-variant rounded-full overflow-clip">
                <div className="w-[8%] h-full bg-success rounded-full"></div>
              </div>
              <p className="place-self-end text-on-surface-variant text-label-small">
                960 bottles left
              </p>
            </div>
          </div>
        </Card>

        <Card className="col-span-2 flex flex-col gap-8 items-start">
          <AffiliateCardContent />
        </Card>
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
              <Icon className="text-[48px] text-orange">account_circle</Icon>
            }
            topLabel={
              <p className="text-orange">
                <Icon className="text-[16px]">person_add</Icon>New Member
              </p>
            }
            bottomLabel={<p>Just Now</p>}
          >
            <p>
              <span className="font-semibold">Jarod John Juco</span> has joined
              your network.
            </p>
          </Notification>

          <Notification
            icon={
              <Icon className="text-[48px] text-orange">account_circle</Icon>
            }
            topLabel={
              <p className="text-orange">
                <Icon className="text-[16px]">person_add</Icon>New Member
              </p>
            }
            bottomLabel={<p>Just Now</p>}
          >
            <p>
              <span className="font-semibold">Shalom Samonte</span> has joined
              your network.
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
              <span className="font-semibold">You got 20 Personal Volume</span>{" "}
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
  );
};
