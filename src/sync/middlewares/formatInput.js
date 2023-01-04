import { formatInput } from "../../tools.js";

export default (inputCollector, descriptor="input")=>{

  return ({ request }, next)=>{
    Object.defineProperty(request, descriptor, {value:formatInput(inputCollector(request)), enumerable:true});

    next();
  }

}