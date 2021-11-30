// https://www.bilibili.com/video/BV1iX4y1K72v?p=11
export default function nestTokens(tokens) {
  const nestedTokens = [] //结果数组
  const sections = []; //栈
  let collector = nestedTokens //收集器 
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch(token[0]){
      case '#':
        collector.push(token)
        sections.push(token)
        collector = token[2] = []
        break
      case '/':
        let section_pop = sections.pop()
        collector = sections.length > 0? sections[sections.length - 1][2] : nestedTokens
        break
      default:
        collector.push(token)
    }
  }
  return nestedTokens

}