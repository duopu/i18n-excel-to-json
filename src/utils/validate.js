const validateFirstOrSecondColumnKey = ({ workbook, json, sheetName }) => {
    json.forEach((row) => {
        if (row.key__2 && row.key__1) {
            const sheetIndex = workbook.SheetNames.findIndex(name => name === sheetName);
            const rowNum = row.__rowNum__;
            throw new Error(`\n \n \n \n 本excel第 ${ sheetIndex + 1 } 个 sheet名为是 ‘${ sheetName }’ 的第 ${ rowNum } 行 key__2 列和 key__1列 不能同时存在值 \n \n \n \n `);
        }
    });
}


const getStr = (num = 5) => {
    let str = '';
    for (let i in num) {
        str += '|\n'
    }
    return str;
}

module.exports = {
    validateFirstOrSecondColumnKey,
    getStr,
}
