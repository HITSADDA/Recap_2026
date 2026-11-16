// Find Media

function findMedian(arr) {
    arr = arr.sort((a, b) => a - b)

    let median = 0;

    if (arr.length % 2 === 0) {
        median = (arr[Math.round(arr.length / 2)] + arr[Math.round(arr.length / 2) + 1]) / 2
    } else {
        median = arr[Math.round(arr.length / 2)]
    }
    return median
}


console.log(findMedian([1, 4, 12, 12, 12, 13, 15]))