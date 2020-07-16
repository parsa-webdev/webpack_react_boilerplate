# Webpack + React Boilerplate

This boilerplate is used to write React code with Webpack.

Steps to reproduce this boilerplate on your own:

- Initialize package.json
  ...`npm init -y`

- Setup Webpack, Webpack CLI and the Webpack Dev Server
  ...`npm install webpack webpack-cli webpack-dev-server --save-dev`

- Setup Babel, it's loader and it's presets
  ...`npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

- Create a file named `.babelrc` in the root with this config code
  ...

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- Create a file named `webpack.config.js` in the root to config Webpack with Babel
  ...

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

- Setup HTML Webpack plugin and HTML loader
  ...
  `npm install html-webpack-plugin html-loader --save-dev`

- Config Webpack to produce an HTML page
  ...

```
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```

- Setup React and React DOM
  ...
  `npm install react react-dom`

- Create a folder in the root named `src` and a `index.js` file inside for this entry point React code
  ...

```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>React app built from scratch with Webpack</h1>,
  document.getElementById("app")
);
```

- Create a `index.html` file in the `src` folder with a div tag with the id of `app` inside the body tag
  ...

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React | Webpack</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

- Add these scripts to the `package.json` file to run and build our app for both production and development
  ...

```
...
"scripts": {
    "dev": "webpack-dev-server --mode development --open --hot",
    "production": "webpack --mode production"
},
...
```

- Now you can run the app with `npm run dev` and start making React files in the src folder like usual
