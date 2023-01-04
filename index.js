import slib from "@randajan/simple-lib";


slib(
    process.env.NODE_ENV !== "dev",
    {
        minify:false,
        entries:["sync/index.js", "async/index.js"]
    }
)