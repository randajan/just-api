
const enumerable = true;

const respond = (request, middlewares)=>{

	let output;
  
	const response = Object.defineProperties({}, {
		output:{get:_=>output, enumerable}
	});
	
	const bound = Object.defineProperties({}, {
		request:{value:request, enumerable},
		response:{value:response, enumerable},
		errors:{value:[], enumerable}
	});

	let i = 0;

	const next = _=>{
		if (i === middlewares.length) { return; }

		const mw = middlewares[i++];
		let result;

		try {
			result = typeof mw === "function" ? mw(bound, next) : next();
			if (i === middlewares.length) { output = result; }
		} catch(err) {
			bound.errors.push(err);
		}

		i--;

		return result;
	};

	return next();

}
  
export const createInterface = middlewares=>(request=>respond(request, middlewares));