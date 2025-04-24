"use client";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        {/* 装饰图形 */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
      </div>

      {/* 内容 */}
      <div className="relative py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">
                Easy to use, No coding required
              </span>
            </div>

            <Title className="mb-6 !text-4xl font-bold !text-white sm:!text-5xl md:!text-6xl">
              Random Data Tables
              <span className="block text-blue-200">Made Simple</span>
            </Title>

            <Paragraph className="mb-12 text-lg !text-gray-200 sm:text-xl">
              Create professional-looking tables with random data in seconds.
              Perfect for presentations, reports, and testing purposes. Export
              in any format you need.
            </Paragraph>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="large"
                className="h-12 w-full min-w-[200px] border-white/30 text-lg text-white backdrop-blur-sm hover:border-white/50 hover:text-white sm:w-auto"
                onClick={() => {
                  // 获取 tools 的位置，滚动到该位置
                  const toolsSection = document.getElementById("tools");
                  const scrollTop = toolsSection?.getBoundingClientRect().top;

                  if (scrollTop) {
                    window.scrollTo({
                      top: scrollTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                See Examples
              </Button>
            </div>

            {/* 导出功能标签 */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {[
                "Print Ready",
                "PDF Export",
                "Image Export",
                "Excel Export",
                "CSV Export",
              ].map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
