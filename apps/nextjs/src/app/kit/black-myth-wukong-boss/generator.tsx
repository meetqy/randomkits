"use client";

import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

import BlackMythWukongBoss from "@randomkits/black-myth-wukong-boss";
import { Button } from "@randomkits/ui/button";
import { Input } from "@randomkits/ui/input";
import { getAssetsSrc } from "@randomkits/utils";

import { NAME } from "./constant";

type Result = ReturnType<typeof BlackMythWukongBoss.random>;
const max = BlackMythWukongBoss.count > 100 ? 100 : BlackMythWukongBoss.count;

export const Generator = () => {
  const [result, setResult] = useState<Result>([]);
  const [num, setNum] = useState(24);

  const onGenerator = () => {
    setResult(BlackMythWukongBoss.random({ num, language: "zh-hans" }));
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

      <h3 className="text-lg font-medium">Result</h3>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
        {result.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-2"
          >
            <Image
              removeWrapper
              src={getAssetsSrc(NAME, item.src)}
              className="w-full"
              alt={item.name}
            />
            <p
              className="absolute bottom-2 left-0 z-10 w-full text-center text-lg"
              style={{ textShadow: "-1px -1px 2px #ffffff" }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
