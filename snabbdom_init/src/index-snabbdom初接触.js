import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const path = init([classModule,propsModule,styleModule,eventListenersModule])

const myNode1 = h('a',{props:{href:'https:www.baidu.com',target:'_blank'}},'百度一下，你就知道')

const container = document.getElementById('container')
//上树
path(container,myNode1)
