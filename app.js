let rows = [
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
    ["|       ", "|       ", "|       ", "|       ", "|       ", "|       ", "|"],
 
]
var nums =[["   1  "],['    2   '],['   3   '],['   4   '],['   5   '],['   6    '],['   :  Player']]
var tabs = [];
let count = 36;
function move(arr, choice) {
    tabs = [arr[0].join('') + "\n" + arr[1].join('') + "\n" + arr[2].join('') + "\n" + arr[3].join('') + "\n" + arr[4].join('') + "\n" + arr[5].join('') + "\n" ];
    choice = [choice[0].join('') + choice[1].join('') + choice[2].join('') + choice[3].join('') + choice[4].join('') + choice[5].join('') + choice[6].join('')]
    if (count % 2) {
        ask = Number(prompt(tabs + choice + "2"));
        count--
        console.log(count)
    } else {
        ask = Number(prompt(tabs + choice + "1"));
        count--
        console.log(count)
    }
    if (arr[5][ask - 1] == "|       ") {
        if (count % 2) {
            arr[5][ask - 1] = "|  x   ";
        } else {
            arr[5][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[4][ask - 1] == "|       ") {
        if (count % 2) {
            arr[4][ask - 1] = "|  x   ";
        } else {
            arr[4][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[3][ask - 1] == "|       ") {
        if (count % 2) {
            arr[3][ask - 1] = "|  x   ";
        } else {
            arr[3][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[2][ask - 1] == "|       ") {
        if (count % 2) {
            arr[2][ask - 1] = "|  x   ";
        } else {
            arr[2][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[1][ask - 1] == "|       ") {
        if (count % 2) {
            arr[1][ask - 1] = "|  x   ";
        } else {
            arr[1][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    } else if (arr[0][ask - 1] == "|       ") {
        if (count % 2) {
            arr[0][ask - 1] = "|  x   ";
        } else {
            arr[0][ask - 1] = "|  a   ";
        }
        move(rows, nums)
    }else{
        for(i = 0; i < arr.length; i++){
            if(arr[0][ask-1] != "|       " ){
                choice[ask-1] = "      "
                count++
                move(rows, nums)
            }
        }
    }
}
move(rows, nums)