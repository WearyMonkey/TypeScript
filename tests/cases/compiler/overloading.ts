// @Filename:mod.ts

import { Box } from './box';

export namespace Ops_Mod {
    export function mod(lhs: Box, rhs: Box): number {
        return lhs.value % rhs.value;
    }
}

// @Filename:divide.ts

import { Box } from './box';

export function divide(lhs: Box, rhs: Box): number {
    return lhs.value / rhs.value;
};

// @Filename:multiply.ts

import { Box } from './box';

export namespace Ops {
    export function multiply(lhs: Box, rhs: Box): number {
        return lhs.value * rhs.value;
    }
}

// @Filename:minus.ts

import { Box } from './box';

export function sub(lhs: Box, rhs: Box): number {
    return lhs.value - rhs.value;
}

// @Filename:box.ts

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
