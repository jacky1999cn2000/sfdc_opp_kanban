# devOps

* Makefile
  * 使用了`node:5 image`作为基准,以保证所有的 node_modules 安装时保持统一
  * 运行`make install`安装 node_modules (或者运行`make bash`然后`npm install`)
  * 运行`make bash`进入`node:5 image`的bash,然后运行`npm start`进行 local 开发或者`npm run build`进行 build,build 后的文件将会保存在 build folder 中 (*关于start和build任务里的 bash script 详情见下文*)
  * 运行`make upload`将会把 build folder 中的文件上传至 s3 (不要在 node:5 里面运行`make upload`,请在本机运行,原因是aws的credential存在本机的 ~/.aws folder里面)

* package.json
  * 将 dependencies 和 devDependencies 分开,webpack在build的时候会将 dependencies 的 modules 单独打包成一个vendor.js
  * `npm start` 会根据 webpack.config.js 的设置运行 webpack-dev-server
  * `npm run build` 会根据 webpack.build.config.js 的设置运行 webpack
  * `npm start` 和 `npm run build` 会分别运行一个 bash script 来替换文件中的一些代码(有些代码在dev时使用,有些代码在prod时使用)

* bash scripts ( used to comment off or uncomment off some code based on certain tokens, see inline comments for general explanation)
  * more explanation
    ```
    sed -i 's/^\s*\/\*replace-for-prod-start\s*$/\/\*replace-for-prod-start\*\//g' $prefix$i
    ```
    * `sed -i 's/foo/bar/g' filename` is the command (http://unix.stackexchange.com/questions/159367/using-sed-to-find-and-replace)
    * regex详解(下面这个例子是用空格将上面的完整命令按功能分隔开了)

    `'s/ ^ \s* \/\* replace-for-prod-start \s* $ / \/\* replace-for-prod-start \*\/ /g'`

      * `^` 是行开头符
      * `\s*` 代表空格,即匹配的时候一行开头应该直接是`replace-for-prod`,前面只可以存在空格
      * `\/\*` 就相当于 `\*`,因为这两个字符都是regex里的特殊字符,所以需要前面加`\`来转义
      * `\s* $` `$`是行结束符,前面加`\s*`表示该行在匹配了前面的字符串之后,可以再结束前有空格
      * 中间那个`/`是 sed 命令的一部分, 后面是要替代的文本
      * `/g`表示全部替换
      * 这行命令其实就是将`/*replace-for-prod-start`替换成了`/*replace-for-prod-start*/`


* webpack.config.js (see inline comments)

* webpack.build.config.js (see inline comments)

* .babelrc (see inline comments)  
