import { formatInput } from "../../tools.js";

export default (inputCollector, descriptor="input")=>{

  return async ({ request }, next)=>{
    Object.defineProperty(request, descriptor, {value:formatInput(inputCollector(request)), enumerable:true});

    await next();
  }

}