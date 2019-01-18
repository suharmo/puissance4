let rows = [
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
]
var nums = [
    ["   1  "],
    ['    2   '],
    ['   3   '],
    ['   4   '],
    ['   5   '],
    ['   6    '],
    ['   :  Player']
]
var tabs = "";
let count = 36;


function move(arr, choice) {
    let tourImpair = count % 2;
    
    let ask = promptCol(tourImpair, tabs, choice, arr);


    if (arr[5][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[5][ask - 1] = "|  x   ";
        } else {
            arr[5][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[4][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[4][ask - 1] = "|  x   ";
        } else {
            arr[4][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[3][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[3][ask - 1] = "|  x   ";
        } else {
            arr[3][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[2][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[2][ask - 1] = "|  x   ";
        } else {
            arr[2][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[1][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[1][ask - 1] = "|  x   ";
        } else {
            arr[1][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[0][ask - 1] == "|       ") {
        if (tourImpair) {
            arr[0][ask - 1] = "|  x   ";
        } else {
            arr[0][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else {
        for (i = 0; i < arr.length; i++) {
            if (arr[0][ask - 1] != "|       ") {
                choice[ask - 1] = "       "
                count++
                move(rows, nums)
            }
        }
    }
}
const promptCol = (tourImpair, tabs, choice, arr) => {
    for (i = 0; i < arr.length; i++) {
        tabs = tabs += `${arr[i].join('')}\n`;
     }
    if (tourImpair) {
        ask = Number(prompt(tabs + choice.join('') + "2"));
        count--
    } else {
        ask = Number(prompt(tabs + choice.join('') + "1"));
        count--
    }
    return ask;
}
move(rows, nums)