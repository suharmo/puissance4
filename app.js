//row is the array that includes all th columns refrenced by index
let rows = [
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
]
var nums = [ //nums is the array that includes all the available choices 
    ["   1  "],
    ['    2   '],
    ['   3   '],
    ['   4   '],
    ['   5   '],
    ['   6    '],
    ['   :  Player']
]
var tabs = ""; //tabs is gonna include all spots in the colons joined with .join('')
let count = 36; //count is our counter for the moves to complete all the spots 
function move(arr, choice) { //move() is the function that defines where the playes want to place his game
    let tourImpair = count % 2;
    let ask = promptCol(tourImpair, tabs, choice, arr);
    switch ("|       ") {
        case (arr[5][ask - 1]): //chek if the selected spot by the user is available to be filled 
            if (tourImpair) { //check if wich player has to place his game
                arr[5][ask - 1] = "|  x   ";
            } else {
                arr[5][ask - 1] = "|  a   ";
            }
            move(rows, nums) //call back the function to go back to start
            break;
        case arr[4][ask - 1]:

            if (tourImpair) {
                arr[4][ask - 1] = "|  x   ";
            } else {
                arr[4][ask - 1] = "|  a   ";
            }
            move(rows, nums)
            break;
        case arr[3][ask - 1]:
            if (tourImpair) {
                arr[3][ask - 1] = "|  x   ";
            } else {
                arr[3][ask - 1] = "|  a   ";
            }
            move(rows, nums)
            break;
        case arr[2][ask - 1]:
            if (tourImpair) {
                arr[2][ask - 1] = "|  x   ";
            } else {
                arr[2][ask - 1] = "|  a   ";
            }
            move(rows, nums)
            break;
        case arr[1][ask - 1]:
            if (tourImpair) {
                arr[1][ask - 1] = "|  x   ";
            } else {
                arr[1][ask - 1] = "|  a   ";
            }
            move(rows, nums)
            break;
        case arr[0][ask - 1]:
            if (tourImpair) {
                arr[0][ask - 1] = "|  x   ";
            } else {
                arr[0][ask - 1] = "|  a   ";
            }
            move(rows, nums)
            break;
        default:
            for (i = 0; i < arr.length; i++) {
                if (arr[0][ask - 1] != "|       ") {
                    choice[ask - 1] = "       "
                    count++
                    move(rows, nums)
                }
            }
            break;
    }
}
function promptCol(tourImpair, tabs, choice, arr) {//promptCol() is used to ask the user where to place his game 
    for (i = 0; i < arr.length; i++) {
        tabs = tabs += `${arr[i].join('')}\n`;// join all the spots and reove ","
    }
    //check if the present number is count is pair or unpair 
    if (tourImpair) { // if count % 2 === 0 run this code 
        ask = Number(prompt(tabs + choice.join('') + "2"));
        count--
    } else {//else run this one
        ask = Number(prompt(tabs + choice.join('') + "1"));
        count--
    }
    return ask;
}
move(rows, nums)//call the main recoursive function to play the game 
