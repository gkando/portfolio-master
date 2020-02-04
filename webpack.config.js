var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: false,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'node_modules/vanillajs-scrollspy/dist', to: 'vanillajs-scrollspy' },
      { from: 'src/img', to: 'img' },
    ]),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'public/index.html',
    }),
  ],
};

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = env => {
//   return {
//     mode: env.MODE,
//     entry: './src/index.js',
//     devtool: env.MODE === 'development' ? 'inline-source-map' : 'none',
//     devServer: {
//       contentBase: './dist',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(html)$/,
//           use: {
//             loader: 'html-loader',
//             options: {
//               attrs: false,
//             },
//           },
//         },
//         {
//           test: /\.module\.s(a|c)ss$/,
//           loader: [
//             isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//             {
//               loader: 'css-loader',
//               options: {
//                 modules: true,
//                 sourceMap: isDevelopment,
//               },
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 sourceMap: isDevelopment,
//               },
//             },
//           ],
//         },
//         {
//           test: /\.(png|jp(e*)g|svg)$/,
//           use: [
//             {
//               loader: 'url-loader',
//               options: {
//                 name: 'img/[hash]-[name].[ext]',
//               },
//             },
//           ],
//         },
//         {
//           test: /\.s(a|c)ss$/,
//           exclude: /\.module.(s(a|c)ss)$/,
//           loader: [
//             isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//             'css-loader',
//             {
//               loader: 'sass-loader',
//               options: {
//                 sourceMap: isDevelopment,
//               },
//             },
//           ],
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['.js', 'scss'],
//     },
//     output: {
//       publicPath: '/',
//     },
//     output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new CopyPlugin([
//         { from: 'node_modules/vanillajs-scrollspy/dist', to: 'vanillajs-scrollspy' },
//         { from: 'src/img', to: 'img' },
//       ]),
//       new HtmlWebpackPlugin({
//         inject: 'head',
//         template: 'public/index.html',
//       }),
//       new MiniCssExtractPlugin({
//         filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//         chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
//       }),
//     ],
//   };
// };
