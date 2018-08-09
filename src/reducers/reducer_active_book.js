export default function(state=null, action){
  //这里的这个state不是整个app的state，而是特指这个reducer负责的那个state。
  //state=null是一个初始值， 一开始没有这个初始值的话会报错。
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state; //如果上面的switch不满足，则默认返回原来的state，相当于state没有改变。

}
