import type { Metadata } from "next";
import { AnimalClient } from "./client";

export const metadata: Metadata = {
  title: "Random Animal Flight Data Generator & Exporter",
  description:
    "Generate and export random animal flight data in multiple formats (CSV, Excel, PDF, Image). Features include flight numbers, routes, prices, status, and more.",
};

export default function Page() {
  return <AnimalClient />;
}
