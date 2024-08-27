import { HTMLProps, ReactNode } from "react";

import { cn } from "@randomkits/ui";

export const PageTitle = ({
  classNames,
  title,
  description,
}: {
  title: ReactNode | string;
  description?: ReactNode | string;
  classNames?: {
    title?: HTMLProps<HTMLElement>["className"];
  };
}) => {
  return (
    <div className="mx-auto grid w-full gap-2">
      <h2
        className={cn(
          "font-serif text-2xl font-semibold md:text-3xl",
          classNames?.title,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="leading-7 text-muted-foreground">{description}</p>
      )}
    </div>
  );
};
