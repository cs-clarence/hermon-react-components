import c from "classnames";

export interface TopAppBarProps {
  children?: React.ReactNode;
  className?: string;
  start?: React.ReactNode;
  end?: React.ReactNode;
}

const defaults: TopAppBarProps = {};

const TopAppBar: React.FC<TopAppBarProps> = (props) => {
  props = { ...defaults, ...props };

  return (
    <div className="bg-gradient-to-r from-[#1B4965]">
      <header
        className={c(
          `container px-4 mx-auto flex flex-row items-center to-[#BEE9E8] text-white`,
          props.className,
        )}
      >
        {props.start && (
          <div className="flex flex-row gap-4 items-center">{props.start}</div>
        )}
        <div className="flex-grow flex flex-row gap-4 items-center">
          {props.children}
        </div>
        {props.end && (
          <div className="flex flex-row gap-4 items-center">{props.end}</div>
        )}
      </header>
    </div>
  );
};

export default TopAppBar;
