const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const chalk = require('chalk');
// import chalk from 'chalk';

const translate = require('google-translate-api');
const customValidate = require("./utils/validate");

// 设置要翻译的目标语言
const targetLang = 'en'; // 目标语言，例如 'en' 表示英文

try {

    const filePath = path.join(__dirname, '../excel/basic.xls');
    // 读取Excel文件
    const workbook = xlsx.readFile(filePath);

    // console.log('workbook====', workbook);

    // 遍历每个Sheet
    workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet, { header: "A" });
        const json1 = xlsx.utils.sheet_to_json(worksheet);

        customValidate.validateFirstOrSecondColumnKey({ json, sheetName, workbook });

        console.log('json====', json, json1);
        // const translatedJson = json.map(async (row) => {
        //     const translatedRow = { ...row };
        //
        //     // 遍历每个列并翻译指定的列
        //     for (const key in row) {
        //         if (row.hasOwnProperty(key)) {
        //             const text = row[key];
        //             try {
        //                 const res = await translate(text, { from: 'zh-CN', to: targetLang });
        //                 translatedRow[key] = res.text;
        //             } catch (err) {
        //                 console.error(`Error translating ${ text }:`, err);
        //             }
        //         }
        //     }
        //     return translatedRow;
        // });
        //
        // Promise.all(translatedJson).then(translatedRows => {
        //     // 输出翻译后的JSON文件
        //     const translatedOutputPath = path.join(__dirname, `output/${ sheetName }_${ targetLang }.json`);
        //     fs.writeFileSync(translatedOutputPath, JSON.stringify(translatedRows, null, 2));
        //     console.log(`Translated JSON file generated: ${ translatedOutputPath }`);
        // });
    });

    console.log('Translation process started...');

} catch (e) {
    console.log(chalk.bold.red(`Error: ${ e.message }`));
    console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
    process.exit(1);  // 非零退出码表示错误
}
