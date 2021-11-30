// https://www.bilibili.com/video/BV1iX4y1K72v?p=14
import lookup from './lookup'
import renderTemplate from './renderTemplate';
export default function parseArray(token, data) {
  let templateStr = ''
  const objTemp = lookup(data, token[1])
  for (let i = 0; i < objTemp.length; i++) {
    const item = objTemp[i];
    templateStr += renderTemplate(token[2], {
      ...item,
      '.':item,
    })
  }
  return templateStr
}