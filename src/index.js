import { createInterface } from "./responder.js";

import { showTime } from "./middlewares/showTime.js";
import { showError } from "./middlewares/showError.js";
import { formatInput } from "./middlewares/formatInput.js";
import { addContext } from "./middlewares/addContext.js";
import { logger } from "./middlewares/logger.js";
import { toJSON } from "./middlewares/toJSON.js";


export default createInterface;
export {
    showTime,
    showError,
    formatInput,
    addContext,
    logger,
    toJSON
}