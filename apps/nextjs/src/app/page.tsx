import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@randomkits/ui/card";

import { PageTitle } from "~/components/page-title";
import { kits } from "~/config/siteConfig";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 md:gap-8">
      <PageTitle
        classNames={{
          title: "text-primary",
        }}
        title="Can’t Decide? Try Random Kits!"
        description="We offer a variety of random generators to help you easily overcome decision fatigue.  Not sure what to choose?  Hit random, and find your answer in a click!"
      />

      <div className="sm:columns-2 sm:text-[0] lg:columns-3">
        {kits.map((item) => {
          const name = `Random ${item} Generator`;
          const slug = `/kit/${item.replace(/ /g, "-").toLowerCase()}`;
          const description = `Instantly generate a random ${item} with just one click!`;

          return (
            <div key={slug} className="p-2">
              <Card className="relative overflow-hidden">
                {/* <div className="w-full aspect-video bg-foreground flex items-center justify-center p-4 text-center">
                  <span className="text-background text-3xl font-mono font-bold">{item}</span>
                </div> */}
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">
                    Random{" "}
                    <span className="font-mono text-primary underline">
                      {item}
                    </span>{" "}
                    Generator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
                <Link href={slug} className="absolute inset-0"></Link>
              </Card>
            </div>
          );
        })}
      </div>
    </main>
  );
}
