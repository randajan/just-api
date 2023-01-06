
export const initResponder = (request, middlewares)=>{
    let step = 0;
    let output;

    const enumerable = true;
	const response = Object.defineProperties({}, {
		output:{get:_=>output, enumerable}
	});
	
	const bound = Object.defineProperties({}, {
		request:{value:request, enumerable},
		response:{value:response, enumerable},
		errors:{value:[], enumerable}
	});

    const isDone = _=>step === middlewares.length;
    const stepIn = _=>middlewares[step++];
    const stepOut = _=>{ step--; };
    const setOutput = result=>output = result;

    return {
        bound,
        isDone,
        stepIn,
        stepOut,
        setOutput
    }
}

export const formatInput = val=>{
    const tp = typeof val;
    if (tp === "object") { return formatInputs(val); }
    if (tp !== "string") { return val; }
    const v = val.toLocaleLowerCase();
    if (v === "false") { return false; }
    if (v === "null") { return null; }
    if (v === "undefined") { return undefined; }
    if (v === "NaN") { return NaN; }
    const num = Number(val);
    return isNaN(num) ? val : num;
}
  
export const formatInputs = input=>{
    for (let i in input) {
        input[i] = formatInput(input[i]);
    }
    return input;
}

export const formatError = (err, stackTrace=false)=>{

  const result = {
    msg: typeof err !== "object" ? msg : (err.msg || err.message),
    httpCode:(isNaN(Number(err.httpCode)) ? 500 : err.httpCode),
  }

  if (stackTrace) { result.stack = err.stack; }

  return result;
}