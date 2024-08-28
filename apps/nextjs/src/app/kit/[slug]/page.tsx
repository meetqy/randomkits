import { redirect } from "next/navigation";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (
    slug.toLocaleLowerCase().startsWith("random") &&
    slug.toLocaleLowerCase().endsWith("generator")
  ) {
    redirect(slug.replace("random-", "").replace("-generator", ""));
  }
}
