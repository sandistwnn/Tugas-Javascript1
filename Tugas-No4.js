let startDate = new Date("2024-03-19")
let endDate = new Date("2024-03-25")

let betweenDate = endDate.getTime() - startDate.getTime()
betweenDate = betweenDate / (1000 * 60 * 60 * 24)
console.log (betweenDate)