import Link from "next/link";
import { Icon } from "@iconify/react";

import { Button } from "@randomkits/ui/button";
import { Input } from "@randomkits/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@randomkits/ui/sheet";

import { siteConfig } from "~/config/siteConfig";
import { LogoIcon } from "./logo";

const navs = [{ name: "Dashboard", href: "/" }];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="container flex h-full items-center gap-4 md:gap-8">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-lg font-semibold md:text-base"
          >
            <LogoIcon className="h-6 w-6 text-primary" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          {navs.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="shrink-0 text-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Icon icon={"lucide:menu"} className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <LogoIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">{siteConfig.name}</span>
              </Link>
              {navs.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Icon
                icon="lucide:search"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search random kits..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};
