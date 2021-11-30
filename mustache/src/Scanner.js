export default class Scanner{
  constructor(templateStr){
    this.templateStr = templateStr //当前字符串模板

    this.pos = 0 //当前指针指向
    this.tail = templateStr //当前截取后的字符串，默认是全部
  }
  // 跳过指定内容
  scan(tag){
    if(this.tail.indexOf(tag) === 0){
      this.pos+=tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  // 让指针进行扫描，直到遇到指定内容结束，并且能够返回结束之前路过的文字
  scanUntil(stopTag){
    const pos_backip = this.pos
    // 如果指针没走到头并且切割后的第一个字符串是
    while(!this.eos() && this.tail.indexOf(stopTag) !== 0){
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backip, this.pos)
  }
  // 判断当前指针是否超过当前字符串长度
  eos(){
    return this.pos >= this.templateStr.length
  }
}