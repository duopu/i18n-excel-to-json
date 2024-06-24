### 将excel转换为json

1. 引用 demo/file/basic.xls作为模板，每个sheet对应输出一个json文件。
2. 安装依赖
    ```bash
    npm install i18n-excel-to-json@latest --save

   # or
   yarn add i18n-excel-to-json@latest
    ```
3. 使用：
    ```js
   const conversion = require('i18n-excel-to-json');

   // 相对目录是 node_modules/i18n-excel-to-json 文件所在目录
   conversion({
       filePath: '../../../test/d/basic.xls',
       output: '../../../test/file/output',
   });
   ```
4. 输出：
   到output目录下，每个sheet对应一个json文件。
