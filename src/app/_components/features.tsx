"use client";

import { Typography } from "antd";
import {
  FileTextOutlined,
  ThunderboltOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* 装饰背景 */}
      <div className="absolute -top-12 -right-12 h-40 w-40 transform rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 transition-transform duration-500 group-hover:scale-150" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 transform rounded-full bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        {/* 图标容器 */}
        <div className="relative mb-6 inline-block">
          {/* 图标背景 */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-40 group-hover:blur-xl" />
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 shadow-lg">
            <div className="flex h-full items-center justify-center text-2xl text-white">
              {icon}
            </div>
          </div>
        </div>

        {/* 标题 */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        {/* 描述 */}
        <p className="text-base leading-relaxed text-gray-600">{description}</p>

        {/* 悬停时显示的装饰线 */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

export const Features = () => {
  const features = [
    {
      icon: <FileTextOutlined />,
      title: "Multiple Export Formats",
      description:
        "Export your data in CSV, Excel, PDF, or Image formats with just one click. Perfect for presentations and reports.",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Free & Fast",
      description:
        "Generate random data instantly with no limits. All features are completely free to use.",
    },
    {
      icon: <RocketOutlined />,
      title: "Easy to Use",
      description:
        "Simple and intuitive interface designed for everyone. No coding skills required.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-50 opacity-30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 transform rounded-full bg-indigo-50 opacity-30 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Title
            level={2}
            className="mb-6 !text-4xl !font-bold !tracking-tight"
          >
            Why Choose RandomKits?
          </Title>
          <Paragraph className="text-lg !leading-relaxed text-gray-600">
            Generate high-quality random data effortlessly. Perfect for testing,
            demonstrations, and development purposes.
          </Paragraph>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
