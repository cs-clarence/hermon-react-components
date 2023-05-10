import { Card, Icon } from "$components";
import { useLocation } from "react-router-dom";

export function UnderConstructionPage() {
  const l = useLocation();
  return (
    <Card className="w-full flex flex-col items-center">
      <h2 className="text-display-small font-medium">Under Construction</h2>
      <h3 className="text-headline-large text-on-surface-variant">
        {l.pathname}
      </h3>
      <Icon className="text-[320px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-800">
        construction
      </Icon>
      <p className="text-body-large">
        This page is still under development, please visit again later!
      </p>
    </Card>
  );
}
