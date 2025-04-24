"use client";
import { faker } from "@faker-js/faker";
import { TableClientPage } from "~/components/table-client-page";

interface AnimalData {
  key: string;
  type: string;
  name: string;
  breed: string;
  age: number;
  color: string;
  weight: string;
  status: string;
}

const generateData = (): AnimalData[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    key: index.toString(),
    type: faker.animal.type(),
    name: faker.person.firstName(),
    breed: faker.helpers.arrayElement([
      faker.animal.dog(),
      faker.animal.cat(),
      faker.animal.bird(),
      faker.animal.horse(),
      faker.animal.rabbit(),
    ]),
    age: faker.number.int({ min: 1, max: 15 }),
    color: faker.color.human(),
    weight: `${faker.number.int({ min: 1, max: 100 })}kg`,
    status: faker.helpers.arrayElement([
      "Healthy",
      "Sick",
      "Recovery",
      "Critical",
      "Under Treatment",
    ]),
  }));
};

const columns = [
  {
    title: "Animal Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Breed",
    dataIndex: "breed",
    key: "breed",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render: (age: number) => `${age} years`,
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "Health Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const colorMap: Record<string, string> = {
        Healthy: "green",
        Sick: "red",
        Recovery: "orange",
        Critical: "red",
        "Under Treatment": "blue",
      };
      return <span style={{ color: colorMap[status] }}>{status}</span>;
    },
  },
];

export function AnimalClient() {
  return (
    <TableClientPage
      title="Random Airline Information Table"
      columns={columns}
      generateData={generateData}
    />
  );
}
