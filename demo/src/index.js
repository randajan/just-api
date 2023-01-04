import createInterface, {
    logger,
    showError,
    showTime,
    addContext,
    formatInput,
    toJSON
} from "../../dist/async/index.js";




const api = createInterface([
    toJSON(),
    logger(true),
    showTime(),
    showError(),
    addContext({any:"thing"}),
    formatInput(({query})=>query),
    async ({request:{input}, context})=>{
        return input.foo + " | " + context.any;
    }
]);


api({query:{foo:"bar"}}).then(res=>console.log("async", res));
//console.log("sync", api({query:{foo:"bar"}}));
//expected output - {"output":"bar | thing","time":{"start":"2023-01-03T02:02:00.723Z","end":"2023-01-03T02:02:00.723Z","duration":0}}
