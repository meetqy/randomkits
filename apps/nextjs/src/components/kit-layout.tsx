import { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@randomkits/ui/tabs";

import { PageTitle } from "./page-title";

export default async function KitLayout({
  children,
  introduce,
  docs,
  title,
}: {
  children: ReactNode;
  introduce: ReactNode;
  docs: string;
  title: string;
}) {
  docs = docs.replace("#", "##");

  return (
    <>
      <PageTitle title={`Random ${title} Generator`} />

      <div className="mt-8 min-h-[70vh] w-full rounded-md border bg-background p-4 shadow-sm">
        {children}
      </div>

      <div className="mt-8 rounded-md border bg-background px-4 py-8 lg:px-8">
        <article className="prose prose-rose max-w-full prose-h2:border-b prose-h2:pb-2">
          <Tabs defaultValue="introduce">
            <TabsList>
              <TabsTrigger value="introduce">Introduce</TabsTrigger>
              <TabsTrigger value="docs">Docs</TabsTrigger>
            </TabsList>
            <TabsContent value="introduce">{introduce}</TabsContent>
            <TabsContent value="docs">
              <MDXRemote source={docs} />
            </TabsContent>
          </Tabs>
        </article>
      </div>
    </>
  );
}
