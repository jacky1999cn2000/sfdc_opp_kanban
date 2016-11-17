# devOps

* Makefile
  * 使用了`node:5 image`作为基准,以保证所有的 node_modules 安装时保持统一
  * 运行`make install`安装 node_modules (或者运行`make bash`然后`npm install`)
  * 运行`make bash`进入`node:5 image`的bash,然后运行`npm start`进行 local 开发或者`npm run build`进行 build,build 后的文件将会保存在 build folder 中
  * 运行`make upload`将会把 build folder 中的文件上传至 s3 (不要在 node:5 里面运行`make upload`,请在本机运行,原因是aws的credential存在本机的 ~/.aws folder里面)

* package.json
  * 将 dependencies 和 devDependencies 分开,webpack在build的时候会将 dependencies 的 modules 单独打包成一个vendor.js
  * npm start 会根据 webpack.config.js 的设置运行 webpack-dev-server
  * npm run build 会根据 webpack.build.config.js 的设置运行 webpack

* webpack.config.js (see inline comments)

* webpack.build.config.js (see inline comments)

* .babelrc (see inline comments)
