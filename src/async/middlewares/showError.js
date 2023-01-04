export default (all=false)=>{

  const format = err=>({
    msg:typeof err === "string" ? err : (err.msg || err.message),
    code:(err.code || 500),
    stack:err.stack
  })

  return async ({response, errors}, next)=>{
    await next();
    if (!errors.length) { return; }
    if (all) { response.errors = errors.map(format); }
    else { response.error = format(errors[0]); }

  }

}