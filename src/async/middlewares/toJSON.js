

export default ()=>{
    return async ({response}, next)=>{
        await next();
        return JSON.stringify(response);
    }
}