const findSumOfPairOfNumbersThatIsClosestToZero = (numbers) => {

    const results = []
    if (!numbers) {
        throw new Error('No data given')
    }
    if (numbers.length <= 1) {
        throw new Error('At least 2 numbers should be given')
    }
    if (numbers.some((num) => isNaN(num))) {
        throw new Error('Only numbers can be entries within the array')
    }
    // add each number with other numbers and store as objects in array
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            // dont add same number
            if (i === j) continue
            // dont add same two numbers
            if (results.some(r => r.num2 === numbers[i] && r.num1 === numbers[j])) {
                continue
            }
            results.push({num1: numbers[i], num2: numbers[j], result: numbers[i] + numbers[j]})
        }
    }

    // find closest result to zero
    const closest = results.reduce(function (prev, curr) {
        return (Math.abs(curr.result - 0) < Math.abs(prev.result - 0) ? curr : prev)
    })

    return closest.result
}

module.exports = findSumOfPairOfNumbersThatIsClosestToZero
