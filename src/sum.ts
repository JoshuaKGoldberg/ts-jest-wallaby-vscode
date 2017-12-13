import { MyNumber } from "./types";
import { MyExcludedNumber } from "./excluded";

export function sum(a: MyNumber, b: MyExcludedNumber): number {
    return a + b;
}