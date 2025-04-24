"use client";
import { Button, ConfigProvider, Table, theme, Typography } from "antd";
import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const { Title } = Typography;

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
  const [data, setData] = useState<AirlineData[]>(generateData());
  const componentRef = useRef<HTMLDivElement>(null);

  const handleRefresh = useCallback(() => {
    setData(generateData());
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <div className="py-6">
      <div className="mb-6 flex items-center justify-between">
        <Title level={1}>Random Airline Information Table</Title>
        <div className="space-x-4">
          <Button onClick={handleRefresh} type="primary">
            Refresh Data
          </Button>
          <Button onClick={() => handlePrint()}>Print Table</Button>
        </div>
      </div>

      <div ref={componentRef}>
        <ConfigProvider
          theme={{
            algorithm: theme.compactAlgorithm,
          }}
        >
          <Table
            sticky
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </ConfigProvider>
      </div>
    </div>
  );
}
