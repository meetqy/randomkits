"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import ChinaPhoneNumber from "@randomkits/china-phone-number";
import { Button } from "@randomkits/ui/button";
import { Input } from "@randomkits/ui/input";

import { copyToClipboard } from "~/utils/client";

type Result = ReturnType<typeof ChinaPhoneNumber.random>;
const max = 8;

export const Generator = () => {
  const [result, setResult] = useState<Result>();
  const [num, setNum] = useState(8);

  const onGenerator = () => {
    setResult(ChinaPhoneNumber.random({ num }));
  };

  useEffect(() => {
    onGenerator();
  }, []);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
        <div className="flex items-center gap-x-2">
          Generate
          <Input
            className="h-8 w-20 py-0 text-center"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
            onBlur={(e) => {
              const n = Number(e.target.value);
              if (n < 1) {
                setNum(1);
              } else if (n > max) {
                setNum(max);
              }
            }}
            max={max}
            placeholder={`max size: ${max}`}
          />
          Length.<span className="text-muted-foreground">(max: {max})</span>
        </div>
      </div>
      <Button size={"lg"} className="w-full" onClick={onGenerator}>
        Generator
      </Button>

      <h3 className="flex justify-between text-lg font-medium">
        Result{" "}
        <span className="ml-2 flex items-center gap-1">
          <Icon
            icon={"material-symbols:info-rounded"}
            className="h-5 w-5 text-blue-500"
          />
          <span className="text-base font-normal text-muted-foreground">
            Click to Clipboard.
          </span>
        </span>
      </h3>

      <div className="grid divide-y rounded-md border text-center font-mono text-3xl">
        {result?.map((item) => (
          <div
            key={item}
            className="cursor-pointer py-3 transition-all duration-300 hover:bg-rose-50"
            onClick={() => copyToClipboard(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
