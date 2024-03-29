const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    formList:"./src/Pages/FormList.ts",
    formCreator:"./src/Pages/FormCreator.ts",
    editDocument: "./src/Pages/EditDocument.ts",
    index: "./src/Pages/Index.ts"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader"
            // options: {
            //   // injectType: "singletonStyleTag"
            //   // injectType: "linkTag"
            // }
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
         use: [
          'file-loader',
        ]
      },
    ]
  }
};
