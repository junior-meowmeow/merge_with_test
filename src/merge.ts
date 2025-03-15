export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let collection_merged: number[] = [];
    let i = 0; // index of collection_1
    let j = 0; // index of collection_2
    let k = collection_3.length - 1; // index of collection_3

    // Merge Sort in O(n)
    while (i < collection_1.length && j < collection_2.length && k >= 0) {
        if (collection_1[i] < collection_2[j] && collection_1[i] < collection_3[k]) {
            collection_merged.push(collection_1[i++]);
        } else if (collection_2[j] < collection_3[k]) {
            collection_merged.push(collection_2[j++]);
        } else {
            collection_merged.push(collection_3[k--]);
        }
    }
    // If collection_1 and collection_2 remains
    while (i < collection_1.length && j < collection_2.length) {
        collection_merged.push(collection_1[i] < collection_2[j] ? collection_1[i++] : collection_2[j++]);
    }
    // If collection_1 and collection_3 remains
    while (i < collection_1.length && k >= 0) {
        collection_merged.push(collection_1[i] < collection_3[k] ? collection_1[i++] : collection_3[k--]);
    }
    // If collection_2 and collection_3 remains
    while (j < collection_2.length && k >= 0) {
        collection_merged.push(collection_2[j] < collection_3[k] ? collection_2[j++] : collection_3[k--]);
    }
    // Fill for any remaining collection
    while (i < collection_1.length) collection_merged.push(collection_1[i++]);
    while (j < collection_2.length) collection_merged.push(collection_2[j++]);
    while (k >= 0) collection_merged.push(collection_3[k--]);

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    return collection_merged;
}
