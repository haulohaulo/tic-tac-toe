let game = {
    board:[
        ["tl", "tm", "tr"],
        ["ml", "mm", "mr"],
        ["bl", "bm", "br"]
    ],
    state: "running"
}

let player1 = {
    name: "Player1",
    mark: "X",
}

let player2 = {
    name: "Player2",
    mark: "O",
    
}


function turn(player) {

    const topRow = game.board[0];
    const middleRow = game.board[1];
    const bottomRow = game.board[2];
    
    
    function updateBoard() {
        const rowReference = playerLocation.substring(0,1); //reference for which row the player has selected

        function editRow(row) {
            for (let i = 0; i < row.length; i++) {
                if (playerLocation == row[i]) {
                    row[i] = player.mark;
                }
            }
        }

        switch (rowReference) {
            case "t":
                editRow(topRow);
                break;
            case "m":
                editRow(middleRow);
                break;
            case "b":
                editRow(bottomRow);
                break;
        }
        console.log(game.board);   
    }
   

    

    function checkWinner() {
        const winningCombinations = [
            [topRow[0], topRow[1], topRow[2]],
            [middleRow[0], middleRow[1], middleRow[2]],
            [bottomRow[0], bottomRow[1], bottomRow[2]],
            [topRow[0], middleRow[0], bottomRow[0]],
            [topRow[1], middleRow[1], bottomRow[1]],
            [topRow[2], middleRow[2], bottomRow[2]],
            [topRow[0], middleRow[1], bottomRow[2]],
            [bottomRow[0], middleRow[1], topRow[2]]
        ]

        const checkArr = arr => arr.every(v => v === arr[0]);  //check if the value of every cell in each winning combination array is the same

        for (let i = 0; i < winningCombinations.length; i++) {
            if (checkArr(winningCombinations[i]) === true) {
                console.log(`${player.name} wins yay`);
                game.state = "ends"
            };
        }
        }
    

    const playerLocation = prompt(`${player.name}'s location:`);
    updateBoard();
    checkWinner();

}
    


for (let i = 0; i < 9; i++) {
    turn(player1);
    if (game.state == "ends") {
        console.log("game ends")
        break;
        
    }
    turn(player2);
    if (game.state == "ends") {
        console.log("game ends")
        break;
    }
}