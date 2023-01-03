export const addContext = (value={}, descriptor="context")=>{
  return (bound, next)=>{
    Object.defineProperty(bound, descriptor, {value, enumerable:true});
    next();
  }
}
  