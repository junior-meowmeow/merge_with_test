import { merge } from "./merge";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function parseInput(input: string): number[] {
    return input
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter((num) => !isNaN(num));
}

console.log("Enter three sorted arrays.");
console.log("Example: 0 1 2 3 (ascending), 2 3 4 6 (ascending), 7 3 1 0 (descending)");

rl.question("Enter first sorted array: ", (input1) => {
    rl.question("Enter second sorted array: ", (input2) => {
        rl.question("Enter third sorted array (descending): ", (input3) => {
            const collection_1 = parseInput(input1);
            const collection_2 = parseInput(input2);
            const collection_3 = parseInput(input3);

            // Merge arrays
            const result = merge(collection_1, collection_2, collection_3);
            console.log("Merged Array:", result);

            rl.close();
        });
    });
});
