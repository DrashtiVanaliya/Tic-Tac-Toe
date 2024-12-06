// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector("#reset");
// let newbtn = document.querySelector("#newbtn");
// let msgc = document.querySelector(".msgc");
// let msg = document.querySelector("#msg");


// //   box.addEventListener('click',()=>Content.style.color="red");
// let turn0 = true;
// let count = 0;  //a

// const winpattern = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];
// const resetgame = () => {
//     turn0 = true;
//     count = 0;
//     enabledboxes();
//     msgc.classList.Remove.add("hide");

// };


// boxes.forEach((box) => {
//     box.addEventListener("click", () => {

//         if (turn0) {
//             box.innerText = "o";
//             turn0 = false;
//         }
//         else {
//             box.innerText = "x";
//             turn0 = true;
//         }
//         box.disabled = true;
//         count++;

//         let isWinner = checkwinner(); //a

//         if (count === 9 && !isWinner) {
//             gameDraw();
//         }
//     });

// });

// const gameDraw = () => {
//     msg.innerText = 'Game Draw';
//     msgc.classList.remove("hide")
//     disabledboxes();
// }



// const disabledboxes = () => {
//     for (let box of boxes) {
//         console.log(box)
//     }
// };
// const enabledboxes = () => {
//     for (let box of boxes) {
//         box.disabled = flase;
//         box.innerText = "";
//     }
// };

// const showwinner = (winner) => {
//     msg.innerText = `Congratulation,winner is ${winner}`;
//     msgc.classList.remove("hide");
//     disabledboxes();
// };

// const checkwinner = () => {
//     for (pattern of winpattern) {
//         let po1val = boxes[pattern[0].innerText];
//         let po2val = boxes[pattern[1].innerText];
//         let po3val = boxes[pattern[2].innerText];

//         if (po1val != "" && po2val != "" && po3val != "") {
//             if (po1val === po2val && po2val === po3val) {
//                 showwinner(po1val);
//                 return true; //a
//             }
//         }
//     }
// };

// newbtn.addEventListener("click", resetgame);
// reset.addEventListener("click", resetgame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgc");
let msg = document.querySelector("#msg");


//   box.addEventListener('click',()=>Content.style.color="red");
let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnO = true;
    count = 0;
    enabledboxes();
    msgContainer.classList.add("hide");

};


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });

});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                return true; //a
            }
        }
    }
};

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);