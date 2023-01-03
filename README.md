# @randajan/just-api

[![NPM](https://img.shields.io/npm/v/@randajan/just-api.svg)](https://www.npmjs.com/package/@randajan/just-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Goal is to create simple extendable web interface using middlewares

## Install

```bash
npm install @randajan/just-api
```

or

```bash
yarn add @randajan/just-api
```


## Main methods
```js

import createInterface, {
    logger,
    showError,
    showTime,
    addContext,
    formatInput,
    toJSON
} from "@randajan/just-api";




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

```


## License

MIT © [randajan](https://github.com/randajan)
