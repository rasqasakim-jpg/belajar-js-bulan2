import counterIn from "./counter.js";

const mulai = counterIn();

console.log(mulai());
console.log(mulai());


import { LIMIT } from "./counter.js";

console.log(LIMIT);

import * as counter from "./counter.js";

const awal = counter.default();

console.log(awal());
console.log(awal());
console.log(counter.LIMIT);







