var moves = 0;
var gameWon = false;

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

var options = [
    " "," "," ",
    " "," "," ",
    " "," "," "
];

function playerTurn(){

    if (moves % 2 == 0){
        return "X";
    }
    else{
        return "O";
    }
}

function placeMove(square){

    if (options[square] == " " && gameWon == false){
        options[square] = playerTurn();
        $("#"+square).html("<p class='symbol'>"+playerTurn()+"</p>");
        moves++;
    }

}

function checkWin(){

    for(var i = 0; i < winCondition.length; i++){
        var index1 = winCondition[i][0];
        var index2 = winCondition[i][1];
        var index3 = winCondition[i][2];

        if (options[index1] == " " || options[index2] == " " || options[index3 == " "]){
            continue;
        }
        if (options[index1] == options[index2] && options[index2] == options[index3]){
            var symbol = options[index1];
            if(symbol == "X"){
                $("h1").text("PLAYER 1 WINS!");
                gameWon = true;
                break;
            }
            else{
                $("h1").text("PLAYER 2 WINS!");
                gameWon = true;
                break;
            }
        }
        if(!options.includes(" ")){
            $("h1").text("DRAW!");
        }
    }

}

function detectClick(){


    $(".square").on("click", function(event){
        placeMove(event.target.id);
        checkWin();
    });

}

function resetGame(){

    $(".btn").on("click", function(){
        options = [
        " "," "," ",
        " "," "," ",
        " "," "," "
        ]
        gameWon = false;
        moves = 0;
        $(".square").html("<p></p>");
        $("h1").text("Tic Tac Toe");

        $(".btn").css("background-color", "#5AB2FF");
        setTimeout(function(){
            $(".btn").css("background-color", "#10439F");
        }, 150);    
        
    });
}

function main(){
    detectClick();
    resetGame();
}

main();
