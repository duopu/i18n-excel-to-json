const axios = require('axios');

const translate = async (text, targetLang) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${ targetLang }&dt=t&q=${ encodeURIComponent(text) }`;
    try {
        const response = await axios.get(url);
        if (response.status === 200 && response.data && response.data[0]) {
            return response.data[0][0][0]; // 获取翻译结果
        } else {
            throw new Error('Translation failed.');
        }
    } catch (error) {
        console.error(`Error translating text: ${ text }`, error);
        return text; // 返回原文本
    }
};

// 示例用法
const main = async () => {
    const textToTranslate = '你好';
    const targetLang = 'en'; // 英语
    const translation = await translate(textToTranslate, targetLang);
    console.log(`翻译结果：${ translation }`);
};

main().catch(error => console.error(error));
