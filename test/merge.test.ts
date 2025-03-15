import { merge } from "../src/merge";

describe("Merge Sorted Arrays", () => {
    test("Merging with without overlapped number", () => {
        const collection_1 = [1, 3, 4, 7, 9, 13];
        const collection_2 = [2, 5, 8, 10, 14];
        const collection_3 = [12, 11, 6, 0];

        const collection_merged = merge(collection_1, collection_2, collection_3);

        expect(collection_merged).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

    test("Merging arrays with overlapped numbers", () => {
        const collection_1 = [0, 1, 2, 3, 5, 7, 11];
        const collection_2 = [0, 2, 4, 6, 8, 10];
        const collection_3 = [8, 7, 6, 5, 4, 3, 2, 1, 0];

        const collection_merged = merge(collection_1, collection_2, collection_3);

        expect(collection_merged).toEqual([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 10, 11]);
    });

    test("Merging arrays with duplicate elements", () => {
        const collection_1 = [0, 0, 1, 2, 2, 3, 4, 4];
        const collection_2 = [2, 3, 3, 4, 4, 5];
        const collection_3 = [6, 5, 5, 4, 4, 3, 2, 2, 1];

        const collection_merged = merge(collection_1, collection_2, collection_3);

        expect(collection_merged).toEqual([0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6]);
    });

    test("Merging empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    });
});
