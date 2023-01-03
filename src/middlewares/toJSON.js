

export const toJSON = ()=>{
    return ({response}, next)=>{
        next();
        return JSON.stringify(response);
    }
}