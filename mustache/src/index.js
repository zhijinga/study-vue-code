import parseTemptaleToTokens from './parseTemptaleToTokens'
import renderTemplate from './renderTemplate'
window.MUS_Template = {
  render(templateStr,data){
    var tokens = parseTemptaleToTokens(templateStr)
    // 调用renderTemplate 函数生成dom字符串
    const domStr = renderTemplate(tokens,data)
    return domStr
  }
}