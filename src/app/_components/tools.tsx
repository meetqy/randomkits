"use client";

import { Button, Typography } from "antd";
import Link from "next/link";
import {
  FileExcelOutlined,
  FilePdfOutlined,
  PrinterOutlined,
  ApiOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const tools = [
  {
    title: "Random Airline Table",
    description:
      "Generate random airline flight data with routes, prices and status",
    path: "/airline",
    features: ["Tables", "Routes", "Prices", "Status"],
  },
];

export const Tools = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 h-64 w-64 -translate-x-32 -translate-y-32 transform rounded-full bg-blue-50 opacity-30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-32 translate-y-32 transform rounded-full bg-indigo-50 opacity-30 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Title id="tools" level={2} className="mb-4 !text-3xl !font-bold">
            Powerful Random Data Tools
          </Title>
          <p className="text-gray-600">
            Generate high-quality random data with our professional tools.
            Export in multiple formats and access via API.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.path} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

function ToolCard({
  title,
  description,
  path,
  features,
}: {
  title: string;
  description: string;
  path: string;
  features: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* 装饰背景 */}
      <div className="absolute -top-12 -right-12 h-40 w-40 transform rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 transition-transform duration-500 group-hover:scale-150" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 transform rounded-full bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        {/* 标题 */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        {/* 描述 */}
        <p className="mb-6 text-gray-600">{description}</p>

        {/* 功能标签 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 导出格式图标 */}
        <div className="mb-6 flex items-center gap-4 text-gray-400">
          <FileExcelOutlined className="text-lg transition-colors hover:text-green-500" />
          <FilePdfOutlined className="text-lg transition-colors hover:text-red-500" />
          <PrinterOutlined className="text-lg transition-colors hover:text-blue-500" />
          <ApiOutlined className="text-lg transition-colors hover:text-purple-500" />
        </div>

        {/* 按钮 */}
        <Link href={path} className="inline-block w-full">
          <Button className="w-full" type="primary" size="large">
            Try Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
