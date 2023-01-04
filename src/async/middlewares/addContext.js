export default (value={}, descriptor="context")=>{
  return async (bound, next)=>{
    Object.defineProperty(bound, descriptor, {value, enumerable:true});
    await next();
  }
}
  