

export default (descriptor="time")=>{

    return async ({response}, next)=>{
			let end;

      const enumerable = true; 
      const time = Object.defineProperties({}, {
        start:{ value:new Date(), enumerable },
				end:{ get:_=>end, enumerable},
        duration:{ get:_=>(end || new Date()) - time.start, enumerable}
      });
  
      Object.defineProperty(response, descriptor, {value:time, enumerable});
  
      await next();

			end = new Date();
  
    }
  
  }
  