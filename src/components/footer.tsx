import { RiseOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        {/* 装饰图形 */}
        <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      {/* 内容区域 */}
      <div className="relative">
        <div className="container mx-auto px-6 pt-24 pb-6">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="group relative mb-8">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-lg transition-all duration-500 group-hover:from-blue-500/30 group-hover:to-indigo-500/30" />
              <div className="relative flex items-center gap-3">
                <RiseOutlined className="text-3xl !text-blue-400" />
                <h2 className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
                  RandomKits
                </h2>
              </div>
            </div>

            {/* 描述文本 */}
            <div className="relative mb-16 max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-gray-400">
                Create professional random data tables with just a few clicks.
                Perfect for testing, demonstrations, and development purposes.
                Export in various formats including CSV, Excel, PDF and more.
              </p>
            </div>

            {/* 分隔线 */}
            <div className="mb-8 h-px w-full max-w-sm bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />

            {/* 版权信息 */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© {new Date().getFullYear()}</span>
              <span className="font-medium text-gray-400">RandomKits</span>
              <span>·</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
