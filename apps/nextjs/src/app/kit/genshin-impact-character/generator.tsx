"use client";

import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

import GenshinImpactCharacter from "@randomkits/genshin-impact-character";
import { Button } from "@randomkits/ui/button";
import { Input } from "@randomkits/ui/input";
import { getAssetsSrc } from "@randomkits/utils";

import { NAME } from "./constant";

type Result = ReturnType<typeof GenshinImpactCharacter.random>;
const max = GenshinImpactCharacter.count;

export const Generator = () => {
  const [result, setResult] = useState<Result>([]);
  const [num, setNum] = useState(18);

  const onGenerator = () => {
    setResult(GenshinImpactCharacter.random({ num, language: "en" }));
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {result.map((item) => {
          const src = getAssetsSrc(
            NAME,
            item.id.includes("traveler") ? "traveler" : item.id,
          );
          return (
            <div
              key={item.name}
              className="relative flex flex-col items-center justify-center rounded-md border"
            >
              <Image src={src} alt={item.name} className="h-32 w-32" />
              {/* <Image
                className="absolute left-0 top-0 z-10 m-0 h-8 w-8"
                removeWrapper
                src={getAssetsSrc(NAME, item.id)}
                alt={item.type + " type"}
              /> */}
              <div className="grid w-full text-center text-sm">
                <p className="text-base font-medium text-primary">
                  {item.name}
                </p>
                <p className="text-secondary-foreground">{item.element}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
