import { initResponder } from "../tools";

export const respond = (request, middlewares)=>{
	const _p = initResponder(request, middlewares);

	const next = _=>{
		if (_p.isDone()) { return; }

		let mw = _p.stepIn();
		let result;

		try {
			result = typeof mw === "function" ? mw(_p.bound, next) : next();
			if (_p.isDone()) { _p.setOutput(result); }
		} catch(err) {
			_p.bound.errors.push(err);
		}

		_p.stepOut();

		return result;
	};

	return next();

}

export const create = middlewares=>(request=>respond(request, middlewares));