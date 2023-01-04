export default (complete=false, title="")=>{

	title = title ? " "+title : "";

	return async (bound, next)=>{

		console.log(`--- before${title} ---`);
		console.log(complete ? bound : bound.request);
		await next();
		console.log(complete ? bound : bound.response);
		console.log(`--- after${title} ---`);

	}

}
  