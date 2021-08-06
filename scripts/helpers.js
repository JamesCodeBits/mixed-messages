// random number generator for random message function
const randomNum = (num) => {
    return Math.floor(Math.random() * num.length)
}

export { randomNum }