// import content and random number generator
import {content}  from './content.js'
import {randomNum} from './helpers.js'



let test = document.querySelector('p') 

const monsterMessage = () => {
    //console.log(`${monsterName} ${monsterSuggestion} ${monsterActivity}`)
    let monsterName = content.monster[randomNum(content.monster)]
    let monsterSuggestion = content.suggestions[randomNum(content.suggestions)]
    let monsterActivity = content.activities[randomNum(content.activities)]

    let text = monsterName + " " + monsterSuggestion + " " + monsterActivity
    return test.textContent = text
    

}

//monsterMessage()


let btn = document.querySelector('button').addEventListener("click", monsterMessage)



// let text = monsterName + " " + monsterSuggestion + " " + monsterActivity

// test.textContent = text
