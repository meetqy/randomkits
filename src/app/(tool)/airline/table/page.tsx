import type { Metadata } from "next";
import { AirlineClient } from "./client";

export const metadata: Metadata = {
  title: "Random Airline Flight Table Data Generator & Exporter",
  description:
    "Generate and export random airline flight table data in multiple formats (CSV, Excel, PDF, Image). Features include flight numbers, routes, prices, status, and more.",
};

export default function Page() {
  return <AirlineClient />;
}
