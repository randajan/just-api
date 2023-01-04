export default (complete=false, title="")=>{

	title = title ? " "+title : "";

	return (bound, next)=>{

		console.log(`--- before${title} ---`);
		console.log(complete ? bound : bound.request);
		next();
		console.log(complete ? bound : bound.response);
		console.log(`--- after${title} ---`);

	}

}
  