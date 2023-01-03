

export const showTime = (descriptor="time")=>{

    return ({response}, next)=>{
			let end;

      const enumerable = true; 
      const time = Object.defineProperties({}, {
        start:{ value:new Date(), enumerable },
				end:{ get:_=>end, enumerable},
        duration:{ get:_=>(end || new Date()) - time.start, enumerable}
      });
  
      Object.defineProperty(response, descriptor, {value:time, enumerable});
  
      next();

			end = new Date();
  
    }
  
  }
  