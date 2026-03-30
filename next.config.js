// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
//   images: {
//     domains: [],
//     unoptimized: true,
//   },

//   // Thêm cấu hình này để chạy trên tất cả network interfaces
//   devIndicators: {
//     autoPrerender: false,
//   },

//   webpack(config) {
//     // Tìm rule xử lý SVG hiện tại
//     const fileLoaderRule = config.module.rules.find((rule) =>
//       rule.test?.test?.(".svg"),
//     );

//     config.module.rules.push(
//       {
//         ...fileLoaderRule,
//         test: /\.svg$/i,
//         resourceQuery: /url/, // *.svg?url
//       },
//       {
//         test: /\.svg$/i,
//         issuer: fileLoaderRule.issuer,
//         resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
//         use: ["@svgr/webpack"],
//       },
//     );

//     fileLoaderRule.exclude = /\.svg$/i;

//     return config;
//   },

//   // Cấu hình CORS headers (nếu cần)
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Origin", value: "*" },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value: "X-Requested-With, Content-Type, Accept",
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [],
    unoptimized: true,
  },

  devIndicators: {
    autoPrerender: false,
  },

  webpack(config, { isServer }) {
    // Tìm rule xử lý SVG hiện tại
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    // QUAN TRỌNG: Giữ lại CSS loader cho globals.css
    // Không xóa hoặc ghi đè rule CSS mặc định của Next.js
    
    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;