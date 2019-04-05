1、npm config get registry

2、npm init -y

3、npm i webpack -D

4、package.json  里加

"build": "webpack --config webpack.config.js --mode development"

5、npm run build

6、npm i babel-loader babel-preset-env babel-core -D

7、npm i babel-loader@7 -D

8、npm run build

9、下载起服务

npm i webpack-dev-server -D

10、package.json  里加

 "dev": "webpack-dev-server --progress"
 
 11、运行  npm run dev
 
 12、下载css
 
 npm i css-loader style-loader -D
 
 13、npm i extract-text-webpack-plugin css-loader style-loader -D
 
 14、下载html
 
 npm i html-webpack-plugin -D
 
 15、下载图片
 
 npm i file-loader -D
 
 16、版本
 
 npm i extract-text-webpack-plugin@next -D