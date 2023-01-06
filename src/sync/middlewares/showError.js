import { formatError } from "../../tools";

export default (stackTrace=false, all=false)=>{

  return ({response, errors}, next)=>{
    next();
    if (!errors.length) { return; }
    if (all) { response.errors = errors.map(err=>formatError(err, stackTrace)); }
    else { response.error = formatError(errors[0], stackTrace); }

  }

}