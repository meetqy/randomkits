import type { Metadata } from "next";
import { AirlineClient } from "./client";

export const metadata: Metadata = {
  title: "Random Airline Flight Data Generator & Exporter",
  description:
    "Generate and export random airline flight data in multiple formats (CSV, Excel, PDF, Image). Features include flight numbers, routes, prices, status, and more.",
};

export default function Page() {
  return <AirlineClient />;
}
