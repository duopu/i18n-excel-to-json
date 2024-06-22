const xlsx = require('xlsx');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const translate = async (text, targetLang) => {
    const url = `https://libretranslate.com/translate`;
    try {
        const response = await axios.post(url, {
            q: text,
            source: 'zh',
            target: targetLang,
            format: 'text'
        });
        return response.data.translatedText;
    } catch (error) {
        console.error(`Error translating text: ${text}`, error);
        return text; // Return original text if translation fails
    }
};

const processSheet = async (sheetName, sheetData) => {
    const jsonCN = {};
    const jsonEN = {};
    const jsonTW = {};
    const keys = [];

    sheetData.slice(1).forEach(row => {
        const key1 = row[0];
        const key2 = row[1];
        const chineseText = row[2];

        if (!jsonCN[key1]) {
            jsonCN[key1] = {};
            jsonEN[key1] = {};
            jsonTW[key1] = {};
        }

        keys.push([key1, key2]);

        jsonCN[key1][key2] = chineseText;
    });

    for (const [key1, key2] of keys) {
        const chineseText = jsonCN[key1][key2];
        jsonTW[key1][key2] = await translate(chineseText, 'zh-TW');
        jsonEN[key1][key2] = await translate(chineseText, 'en');
    }

    const outputDirs = ['zh_CN', 'en_US', 'zh_TW'];
    outputDirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });

    const outputPathCN = path.join('zh_CN', `${sheetName}.json`);
    const outputPathEN = path.join('en_US', `${sheetName}.json`);
    const outputPathTW = path.join('zh_TW', `${sheetName}.json`);

    fs.writeFileSync(outputPathCN, JSON.stringify(jsonCN, null, 2), 'utf8');
    fs.writeFileSync(outputPathEN, JSON.stringify(jsonEN, null, 2), 'utf8');
    fs.writeFileSync(outputPathTW, JSON.stringify(jsonTW, null, 2), 'utf8');
};

const main = async () => {
    const filePath = './basic.xls';

    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    for (const sheetName of sheetNames) {
        const sheet = workbook.Sheets[sheetName];
        const sheetData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        await processSheet(sheetName, sheetData);
    }
};

main().catch(error => console.error(error));
