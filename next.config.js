const path = require("path");
const withImages = require("next-images");
module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, { buidId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
  pageExtensions: ["tsx"],
});
