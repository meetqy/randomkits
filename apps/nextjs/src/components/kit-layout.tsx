import { ReactNode } from "react";

import { PageTitle } from "./page-title";

export default function KitLayout({
  children,
  readme,
  title,
}: {
  children: ReactNode;
  readme: ReactNode;
  title: string;
}) {
  return (
    <>
      <PageTitle title={`Random ${title} Generator`} />

      <div className="mt-8 min-h-[70vh] w-full rounded-md border bg-background p-4 shadow-sm">
        {children}
      </div>

      <div className="mt-8 rounded-md border bg-background px-4 py-8 lg:px-8">
        <article className="prose prose-rose max-w-full prose-h2:border-b prose-h2:pb-2">
          {readme}
        </article>
      </div>
    </>
  );
}
