"use client";
import { faker } from "@faker-js/faker";
import { TableClientPage } from "~/components/table-client-page";

interface AirlineData {
  key: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
  price: string;
}

const generateData = (): AirlineData[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    key: index.toString(),
    airline: faker.airline.airline().name,
    flightNumber: faker.airline.flightNumber(),
    origin: faker.location.city(),
    destination: faker.location.city(),
    departureTime: faker.date.future().toLocaleTimeString(),
    arrivalTime: faker.date.future().toLocaleTimeString(),
    status: faker.helpers.arrayElement([
      "On Time",
      "Delayed",
      "Cancelled",
      "Boarding",
    ]),
    price: `$${faker.number.int({ min: 100, max: 2000 })}`,
  }));
};

const columns = [
  {
    title: "Airline",
    dataIndex: "airline",
    key: "airline",
  },
  {
    title: "Flight Number",
    dataIndex: "flightNumber",
    key: "flightNumber",
  },
  {
    title: "Origin",
    dataIndex: "origin",
    key: "origin",
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination",
  },
  {
    title: "Departure Time",
    dataIndex: "departureTime",
    key: "departureTime",
  },
  {
    title: "Arrival Time",
    dataIndex: "arrivalTime",
    key: "arrivalTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

export function AirlineClient() {
  return (
    <TableClientPage
      title="Random Airline Information Table"
      columns={columns}
      generateData={generateData}
    />
  );
}
