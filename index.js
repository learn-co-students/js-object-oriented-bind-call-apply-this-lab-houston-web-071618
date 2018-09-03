//Your code here
function justInvoke(fn){
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue,arg);
}
function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = function(functionToBeCopied,thisValue){
    return thisValue;
  }
  return copy;
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
