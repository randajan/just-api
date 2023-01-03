export const formatInput = (inputCollector, descriptor="input")=>{

    const formatInput = val=>{
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
  
    const formatInputs = input=>{
      for (let i in input) {
        input[i] = formatInput(input[i]);
      }
      return input;
    }
  
    return ({ request }, next)=>{
      Object.defineProperty(request, descriptor, {value:formatInput(inputCollector(request)), enumerable:true});
  
      next();
    }
  
  }