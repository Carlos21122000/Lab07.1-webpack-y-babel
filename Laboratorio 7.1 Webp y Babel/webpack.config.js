const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        principal:'./src/start-principal.js',
        personal:'./src/start-personal.js',
        Parte1: './src/start-Parte1.js',
        Parte2: './src/start-Parte2.js',
        Parte3: './src/start-Parte3.js',
        Parte4: './src/start-Parte4.js',
        Parte5: './src/start-Parte5.js',
        Parte6: './src/start-Parte6.js',
        Parte7: './src/start-Parte7.js',
        Parte8: './src/start-Parte8.js',
        Parte9: './src/start-Parte9.js',
        Parte10: './src/start-Parte10.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },
      plugins: [new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
        template: "./src/personal/personal.html",
        filename: "personal.html",
        chunks:["script0"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/principal/principal.html",
        filename: "principal.html",
        chunks:["index"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte1/Parte1.html",
        filename: "Parte1.html",
        chunks:["script1"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte2/Parte2.html",
        filename: "Parte2.html",
        chunks:["script2"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte3/Parte3.html",
        filename: "Parte3.html",
        chunks:["script3"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte4/Parte4.html",
        filename: "Parte4.html",
        chunks:["script4"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte5/Parte5.html",
        filename: "Parte5.html",
        chunks:["script5"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte6/Parte6.html",
        filename: "Parte6.html",
        chunks:["script6"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte7/Parte7.html",
        filename: "Parte7.html",
        chunks:["script7"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte8/Parte8.html",
        filename: "Parte8.html",
        chunks:["script8"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte9/Parte9.html",
        filename: "Parte9.html",
        chunks:["script9"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/parte10/Parte10.html",
        filename: "Parte10.html",
        chunks:["script10"]
      }),
    ],
      module: {
          //incluyo los loaders para css
          //1. utilizo css-loader para trasnformar a js
          //2. Utilizo style.loader para inyectar el css en js al dom.
        rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }, {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|mp3)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                  },
              },
            ],
          },
          { 
            test: /\.js$/, 
            exclude:/node_modules/,
            use: "babel-loader",
          },
        ],
      },
  };


  
        