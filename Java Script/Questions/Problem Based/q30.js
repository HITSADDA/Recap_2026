function calculateDayesBetweenDates(a, b) {
    return (new Date(b).getTime() - new Date(a).getTime()) / (24 * 60 * 60 * 1000)
}

console.log(calculateDayesBetweenDates('2024-02-23', '2026-02-23'))

// 4:56:58