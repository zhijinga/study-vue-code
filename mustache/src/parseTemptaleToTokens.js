import Scanner from './Scanner.js'
import nestTokens from './nestTokens'
// 将模板字符串变为tokens
export default function parseTemptaleToTokens(templateStr) {

  var tokens = []
  // 创建扫描器
  var scanner = new Scanner(templateStr)
  // 让扫描器工作
  var words;
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUntil('{{')
    if (words !== '') tokens.push(['text', words])
    scanner.scan('{{')

    words = scanner.scanUntil('}}')
    if (words !== '') {
      if (words[0] === '#' || words[0] === '/') {
        tokens.push([words[0], words.substr(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    scanner.scan('}}')
  }
  return nestTokens(tokens)

}