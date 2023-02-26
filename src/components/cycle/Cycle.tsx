import c from "classnames";

export interface CycleProps {
  dateRange?: string;
  cycles?: number;
  selected?: boolean;
  tableData?: {
    carry: {
      left: number;
      right: number;
    };
    group: {
      left: number;
      right: number;
    };
    total: {
      left: number;
      right: number;
    };
  };
}

const defaults = {
  dateRange: "",
  cycles: 0,
  selected: false,
  tableData: {
    carry: {
      left: 0,
      right: 0,
    },
    group: {
      left: 0,
      right: 0,
    },
    total: {
      left: 0,
      right: 0,
    },
  },
} satisfies CycleProps;

const Cycle: React.FC<CycleProps> = (props) => {
  const comb = { ...defaults, ...props } satisfies Required<CycleProps>;

  const borderStyles = comb.selected
    ? "border-on-primary/[40%] border-2"
    : "border-on-surface-variant/[40%] border-2";

  return (
    <div
      className={c(
        "rounded-[64px] p-4 py-8 flex flex-col gap-4 items-center min-w-[192px]",
        comb.selected
          ? "text-on-primary bg-primary shadow-lg"
          : "text-on-surface-variant bg-surface-variant",
      )}
    >
      <p>Feb 1 - Feb 7</p>
      <table className="w-full text-label-large">
        <thead>
          <tr>
            <th></th>
            <th className={c(borderStyles)}>Left</th>
            <th className={c(borderStyles)}>Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={c(borderStyles)}>Carry</th>
            <th className={c(borderStyles)}>{comb.tableData.carry.left}</th>
            <th className={c(borderStyles)}>{comb.tableData.carry.right}</th>
          </tr>
          <tr>
            <th className={c(borderStyles)}>Group</th>
            <th className={c(borderStyles)}>{comb.tableData.group.left}</th>
            <th className={c(borderStyles)}>{comb.tableData.group.right}</th>
          </tr>
          <tr>
            <th className={c(borderStyles)}>Total</th>
            <th className={c(borderStyles)}>{comb.tableData.total.left}</th>
            <th className={c(borderStyles)}>{comb.tableData.total.right}</th>
          </tr>
        </tbody>
      </table>
      <p
        className={c("text-[72px] leading-[72px]", {
          "text-on-surface": !comb.selected,
        })}
      >
        {comb.cycles}
      </p>
      <p className="text-headline-medium">Cycles</p>
    </div>
  );
};

export default Cycle;
