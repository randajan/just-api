import createInterface, {
    logger,
    showError,
    showTime,
    addContext,
    formatInput,
    toJSON
} from "../../dist/index.js";




const api = createInterface([
    toJSON(),
    logger(true),
    showTime(),
    showError(),
    addContext({any:"thing"}),
    formatInput(({query})=>query),
    ({request:{input}, context})=>{
        return input.foo + " | " + context.any;
    }
]);


console.log(api({query:{foo:"bar"}}));
//expected output - {"output":"bar | thing","time":{"start":"2023-01-03T02:02:00.723Z","end":"2023-01-03T02:02:00.723Z","duration":0}}
