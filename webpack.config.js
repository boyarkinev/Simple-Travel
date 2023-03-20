const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = (isDev) => [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'), // шаблон
    filename: '[name].html', // название выходного файла
  }),
  isDev && new webpack.HotModuleReplacementPlugin(), // применяет изменения без перезагрузки модулей
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css', // формат имени файла
  }),
].filter(Boolean);

module.exports = (env) => {
	const isDev = env.development === true;
  const isProd = env.production === true;
  
  const options = {context: __dirname};

  options.target = 'web';
  options.mode = 'development';
  options.devtool = 'source-map'; // создает минифицированный js-файл

	if (isProd) {
    options.target = 'browserslist';
    options.mode = 'production';
  }

	options.entry = { // точка входа
    index: path.resolve(__dirname, './src/index.tsx'),
    // ключ 'index' задает название для js-файла в сборке
  }
	options.output = { // директория для файлов сборки
    path: path.resolve(__dirname, './build'),
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут складываться в build/assets
    filename: 'scripts/[name].[contenthash].js', // название задается динамически из колюча в entry: {}
    clean: true, // очищает директорию build при каждой сборке
  }
	options.resolve = {
    plugins: [new TsconfigPathsPlugin()],
		extensions: ['.tsx', '.ts', '.js', '.css'],
  }
  options.module = {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции при каждом запуске
          }
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: isProd === 'production' ? 'asset' : 'asset/resource',
        /* В production режиме изображения размером до 8кб будут инлайнится в код.
        В режиме разработки все изображения будут помещаться в build/assets */
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s[ac]|c|le)ss$/i,
        use: [
          isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
					'css-modules-typescript-loader',
          'css-loader',
					{ loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
    },
    ],
  }
	options.plugins = plugins(isDev);
  options.devServer = {
    static: './build',
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false,
    port: 8000
  }
  return options;
};
