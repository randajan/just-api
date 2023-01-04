

export default ()=>{
    return ({response}, next)=>{
        next();
        return JSON.stringify(response);
    }
}