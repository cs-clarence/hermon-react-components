import { siteLogo } from "$assets";
import { Icon } from "$components/icon";
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
    <header className={c(`flex flex-row items-center`, props.className)}>
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
  );
};

export default TopAppBar;
