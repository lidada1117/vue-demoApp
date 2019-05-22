 "dev":".\\node_modules\\.bin\\webpack-dev-server --inline --hot --open",
  "build":"webpack"



  我们这个项目因为用了webpack-dev-sever,
   所以先安装依赖（依赖里面不能有上面这两行代码），依赖完成后在package.json文件中加入上面两行代码

   运行 npm run dev 

	如果npm run dev  出错  就写
"dev":".\\node_modules\\.bin\\webpack-dev-server --inline --hot --open --port9999",
  "build":"webpack"