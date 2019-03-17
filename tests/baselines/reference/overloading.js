//// [tests/cases/compiler/overloading.ts] ////

//// [mod.ts]
import { Box } from './box';

export namespace Ops_Mod {
    export function mod(lhs: Box, rhs: Box): number {
        return lhs.value % rhs.value;
    }
}

//// [divide.ts]
import { Box } from './box';

export function divide(lhs: Box, rhs: Box): number {
    return lhs.value / rhs.value;
};

//// [multiply.ts]
import { Box } from './box';

export namespace Ops {
    export function multiply(lhs: Box, rhs: Box): number {
        return lhs.value * rhs.value;
    }
}

//// [minus.ts]
import { Box } from './box';

export function sub(lhs: Box, rhs: Box): number {
    return lhs.value - rhs.value;
}

//// [box.ts]
import * as Ops_Minus from './minus';
import * as Ops_Divide from './divide';
import { Ops as Ops_Multiply } from './multiply';
import { Ops_Mod } from './mod';

console.log(Ops_Minus);

export class Box {
    constructor(public value: number) { }
}

export class BoxT<T> {
    constructor(public value: T) { }
}

export namespace Ops {
    export function add(lhs: Box, rhs: Box): Box;
    export function add(lhs: Box, rhs: number): number;
    export function add(lhs: Box, rhs: Box | number) {
        if (rhs instanceof Box) {
            return new Box(lhs.value + rhs.value);
        } else {
            return this.value + rhs;
        }
    }

    export function and<T>(lhs: BoxT<T>, rhs: T) {
        return lhs.value && rhs;
    }

    export function assignAdd(lhs: Box, rhs: number) {
        lhs.value += rhs;
    }

    export function assign(lhs: Box, rhs: number) {
        lhs.value = rhs;
    }

    export function strictEquals(lhs: Box, rhs: number) {
        return lhs.value === rhs;
    }

    export function equals(lhs: Box, rhs: number) {
        return lhs.value == rhs;
    }
}

let b1 = new Box(1);
let b2 = new Box(2);
b1 += 3;
b2 = 3;
const t = new BoxT(1) && 1;
const e1 = b1 == 3;
const e2 = b1 === 3;
const minus = b1 - b2;
const divide = b1 / b2;
const multiply = b1 * b2;
const mod = b1 % b2;
const b3 = b1 + b2;
const b4 = b1 + 1;
const b5 = b1 + 'foo';
const b6 = b1 + {};


//// [minus.js]
"use strict";
exports.__esModule = true;
function sub(lhs, rhs) {
    return lhs.value - rhs.value;
}
exports.sub = sub;
//// [divide.js]
"use strict";
exports.__esModule = true;
function divide(lhs, rhs) {
    return lhs.value / rhs.value;
}
exports.divide = divide;
;
//// [multiply.js]
"use strict";
exports.__esModule = true;
var Ops;
(function (Ops) {
    function multiply(lhs, rhs) {
        return Ops.multiply(lhs.value, rhs.value);
    }
    Ops.multiply = multiply;
})(Ops = exports.Ops || (exports.Ops = {}));
//// [box.js]
"use strict";
exports.__esModule = true;
var Ops_Minus = require("./minus");
var Ops_Divide = require("./divide");
var multiply_1 = require("./multiply");
var mod_1 = require("./mod");
console.log(Ops_Minus);
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
exports.Box = Box;
var BoxT = /** @class */ (function () {
    function BoxT(value) {
        this.value = value;
    }
    return BoxT;
}());
exports.BoxT = BoxT;
var Ops;
(function (Ops) {
    function add(lhs, rhs) {
        if (rhs instanceof Box) {
            return new Box(Ops.add(lhs.value, rhs.value));
        }
        else {
            return Ops.add(this.value, rhs);
        }
    }
    Ops.add = add;
    function and(lhs, rhs) {
        return Ops.and(lhs.value, rhs);
    }
    Ops.and = and;
    function assignAdd(lhs, rhs) {
        Ops.assignAdd(lhs.value, rhs);
    }
    Ops.assignAdd = assignAdd;
    function assign(lhs, rhs) {
        Ops.assign(lhs.value, rhs);
    }
    Ops.assign = assign;
    function strictEquals(lhs, rhs) {
        return Ops.strictEquals(lhs.value, rhs);
    }
    Ops.strictEquals = strictEquals;
    function equals(lhs, rhs) {
        return Ops.equals(lhs.value, rhs);
    }
    Ops.equals = equals;
})(Ops = exports.Ops || (exports.Ops = {}));
var b1 = new Box(1);
var b2 = new Box(2);
Ops.assignAdd(b1, 3);
Ops.assign(b2, 3);
var t = Ops.and(new BoxT(1), 1);
var e1 = Ops.equals(b1, 3);
var e2 = Ops.strictEquals(b1, 3);
var minus = Ops_Minus.sub(b1, b2);
var divide = Ops_Divide.divide(b1, b2);
var multiply = Ops_Multiply.multiply(b1, b2);
var mod = Ops_Mod.mod(b1, b2);
var b3 = Ops.add(b1, b2);
var b4 = Ops.add(b1, 1);
var b5 = Ops.add(b1, 'foo');
var b6 = Ops.add(b1, {});
//// [mod.js]
"use strict";
exports.__esModule = true;
var Ops_Mod;
(function (Ops_Mod) {
    function mod(lhs, rhs) {
        return Ops_Mod.mod(lhs.value, rhs.value);
    }
    Ops_Mod.mod = mod;
})(Ops_Mod = exports.Ops_Mod || (exports.Ops_Mod = {}));
