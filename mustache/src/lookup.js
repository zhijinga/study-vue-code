// https://www.bilibili.com/video/BV1iX4y1K72v?p=13&spm_id_from=pageDriver 教程详细
export default function lookup(dataObj,keyName){
  if(keyName.indexOf('.') !== 0 && keyName !== '.'){
    var keyArr = keyName.split('.')
    let temp = dataObj
    for (let i = 0; i < keyArr.length; i++) {
      const key = keyArr[i];
      temp = temp[key]
    }
    return temp
  }

  return dataObj[keyName]
}