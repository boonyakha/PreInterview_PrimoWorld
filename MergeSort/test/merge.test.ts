import { merge } from '../src/merge';

describe('Merge function', () => {
    it('should merge three sorted arrays into one sorted array', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [9, 8, 6, 4, 2];
        const collection3 = [10, 11, 12];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });

    it('should handle empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];
        const expected: number[] = [];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });
});