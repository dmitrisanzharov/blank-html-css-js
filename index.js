import * as foo from "./foo.js";
import barVar1, {barVar2 as yo} from "./bar.js";

// foo imports
console.log('this is foo', foo);
foo.default();
foo.fooFn2();

console.log(barVar1);
console.log(yo);