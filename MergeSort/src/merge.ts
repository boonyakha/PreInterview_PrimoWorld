export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let i = 0, j = collection2.length - 1, k = 0;
    const result: number[] = [];

    while (i < collection1.length && j >= 0) {
        if (collection1[i] < collection2[j]) {
            result[k++] = collection1[i++];
        } else {
            result[k++] = collection2[j--];
        }
    }

    while (i < collection1.length) {
        result[k++] = collection1[i++];
    }

    while (j >= 0) {
        result[k++] = collection2[j--];
    }

    for (let l = 0; l < collection3.length; l++) {
        result.push(collection3[l]);
    }

    return result;
}