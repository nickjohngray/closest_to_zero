const findSumOfPairOfNumbersThatIsClosestToZero = require('./findSumOfPairOfNumbersThatIsClosestToZero')

describe(' findSumOfPairOfNumbersThatIsClosestToZero', () => {
    test('should return 68 with input [-8, -66, -60]', () => {
        expect(findSumOfPairOfNumbersThatIsClosestToZero([-8, -66, -60])).toBe(-68)
    })
    test('should return -65 with input [-21, -67, -37, -18, 4]', () => {
        expect(findSumOfPairOfNumbersThatIsClosestToZero([-21, -67, -37, -18, 4])).toBe(-14)
    })
    test('should return 1 with input [10, 4, -7, 12, -9, 1]', () => {
        expect(findSumOfPairOfNumbersThatIsClosestToZero([10, 4, -7, 12, -9, 1])).toBe(1)
    })
    test('should return 5 with input [11, 50, 50, 30, 20,30,78,3,2,4,8,9,10,22,88]', () => {
        expect(findSumOfPairOfNumbersThatIsClosestToZero([11, 50, 50, 30, 20, 30, 78, 3, 2, 4, 8, 9, 10, 22, 88])).toBe(5)
    })
    test('should return -1 with input [0, -1, 50, 30]', () => {
        expect(findSumOfPairOfNumbersThatIsClosestToZero([0, -1, 50, 30])).toBe(-1)
    })

    it('should throw an exception when there is not enough numbers', () => {
        expect(
            () => findSumOfPairOfNumbersThatIsClosestToZero([0])
        ).toThrowError('At least 2 numbers should be given')
    })
    it('should throw an exception No data given', () => {
        expect(
            () => findSumOfPairOfNumbersThatIsClosestToZero()
        ).toThrowError('No data given')
    })
    it('should throw an exception when not all array entries are numbers', () => {
        expect(
            () => findSumOfPairOfNumbersThatIsClosestToZero([0,1,5,'Z', 454])
        ).toThrowError('Only numbers can be entries within the array')
    })
})

