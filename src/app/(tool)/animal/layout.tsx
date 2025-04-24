import { Breadcrumb } from "antd";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { title: <Link href="/">Home</Link> },
          { title: "Animal" },
          { title: "Table" },
        ]}
      />
      {children}
    </div>
  );
}
