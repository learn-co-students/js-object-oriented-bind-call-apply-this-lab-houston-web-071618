//Your code here
function justInvoke(fn){
    return fn();
}

function setThisWithCall(fn, thisValue, arg){
    return fn.call(thisValue, arg);
}

const setThisWithApply = function(fn, thisValue, args){
    return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
    const copiedFcn =  functionToBeCopied.bind(thisValue);
    return copiedFcn;
}