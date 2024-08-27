import Link from "next/link";

import { kits } from "~/config/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container space-y-8 py-8 lg:space-y-12 lg:py-12">
        <h3 className="text-3xl font-medium">All Random Kits</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {kits.map((item) => (
            <Link
              href={`/kit/random-${item}-generator`
                .replaceAll(" ", "-")
                .toLocaleLowerCase()}
              key={item}
              className="hover:underline"
            >
              Random {item} Generator
            </Link>
          ))}
        </div>
        <p className="text-center text-muted-foreground">
          ©{" "}
          <Link href={"/"} className="hover:underline">
            RandomKits.com
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
