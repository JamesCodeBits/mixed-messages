// import content and random number generator
import { content } from './content.js'
import { randomNum } from './helpers.js'

const monsterName = content.monster[randomNum(content.monster)]
const monsterSuggestion = content.suggestions[randomNum(content.suggestions)]
const monsterActivity = content.activities[randomNum(content.activities)]

console.log(`${monsterName} ${monsterSuggestion} ${monsterActivity}`)