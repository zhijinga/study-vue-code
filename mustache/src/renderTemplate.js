import lookup from './lookup';
import parseArray from './parseArray';

export default function renderTemplate(tokens,data){
  var template = ''
  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];
    if(item[0] === 'text'){
      template+=item[1]
    }else if(item[0] === 'name'){
      template += lookup(data,item[1])
    }else if(item[0] === '#'){
      template += parseArray(item,data)
    }
  }
  return template
}