const xlsx = require('xlsx');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const trans = require("./translate");

let config = {
    filePath: '../../demo/file/basic.xls',
    output: '../../demo/file/output'
}


const translate = async (text, targetLang) => {
    return await trans.englishToChinese(text);
    return text;
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
        console.error(`Error translating text: ${ text }`, error);
        return text; // Return original text if translation fails
    }
};

const setNestedValue = (obj, keys, value) => {
    let temp = obj;
    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            temp[key] = value;
        } else {
            temp[key] = temp[key] || {};
            temp = temp[key];
        }
    });
};

const processSheet = async (sheetName, sheetData) => {
    const jsonCN = {};
    const jsonEN = {};
    const jsonTW = {};

    let previousKey1 = null;

    for (let row = 1; row < sheetData.length; row++) {
        const key1 = sheetData[row][0];
        const key2 = sheetData[row][1];
        const chineseText = sheetData[row][2];
        const cnText = sheetData[row][3];
        const twText = sheetData[row][4];

        if (!key1) {
            if (previousKey1 && key2) {
                const nestedKeys = key2.split('.').map(k => k.trim());
                setNestedValue(jsonCN, [previousKey1, ...nestedKeys], chineseText);
                setNestedValue(jsonTW, [previousKey1, ...nestedKeys], twText || await translate(chineseText, 'zh-TW'));
                setNestedValue(jsonEN, [previousKey1, ...nestedKeys], cnText || await translate(chineseText, 'en'));
            }
            continue;
        }

        if (key1 && !key2) {
            jsonCN[key1] = chineseText;
            jsonTW[key1] = twText || await translate(chineseText, 'zh-TW');
            jsonEN[key1] = cnText || await translate(chineseText, 'en');
            previousKey1 = key1;
        }

        if (key1 && key2) {
            const compositeKey = `${ key1 }.${ key2 }`;
            jsonCN[compositeKey] = chineseText;
            jsonTW[compositeKey] = twText || await translate(chineseText, 'zh-TW');
            jsonEN[compositeKey] = cnText || await translate(chineseText, 'en');
            previousKey1 = key1;
        }
    }

    const prefix = path.resolve(__dirname, config.output);

    const outputDirs = ['zh_CN', 'en_US', 'zh_TW'];
    outputDirs.forEach(dir => {
        dir = path.resolve(prefix, dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    const outputPathCN = path.resolve(prefix, outputDirs[0], `${ sheetName }.json`);
    const outputPathEN = path.resolve(prefix, outputDirs[1], `${ sheetName }.json`);
    const outputPathTW = path.resolve(prefix, outputDirs[2], `${ sheetName }.json`);

    fs.writeFileSync(outputPathCN, JSON.stringify(jsonCN, null, 2), 'utf8');
    fs.writeFileSync(outputPathEN, JSON.stringify(jsonEN, null, 2), 'utf8');
    fs.writeFileSync(outputPathTW, JSON.stringify(jsonTW, null, 2), 'utf8');
};

const main = async (conf) => {
    // const filePath = path.join(__dirname, 'basic.xls');
    config = conf;
    const filePath = path.join(__dirname, config.filePath);

    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    for (const sheetName of sheetNames) {
        const sheet = workbook.Sheets[sheetName];
        const sheetData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        await processSheet(sheetName, sheetData);
    }
};

// main(config);
module.exports = main;

// export default main;
