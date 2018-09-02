//Your code here

function justInvoke(func){
  return func();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}

const setThisWithApply= function(fn, thisValue, arg){
  return fn.apply(thisValue,arg)
}

function returnNewFunctionOf(fn, thisValue){
  func=fn.bind(thisValue);
  return func
}
