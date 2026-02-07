let game = {
    board:[["tl", "tm", "tr"],
        ["ml", "mm", "mr"],
        ["bl", "bm", "br"]
    ]   
}

let player1 = {
    name: "Player1",
    mark: "X",
    placement:[]
}

let player2 = {
    name: "Player2",
    mark: "O",
    placement: []
}

let gameflow = {
    
}


function playerAction(player) {
    
    const playerLocation = prompt(`${player.name}'s location:`);

    updateBoard();
    
    
    function updateBoard() {
        const row = playerLocation.substring(0,1); //reference for which row player has selected
        switch (row) {
            case "t":
                editRow(0);
                break;
            case "m":
                editRow(1);
                break;
            case "b":
                editRow(2);
                break;
        }
        console.log(game.board);   
    }
   

    function editRow(rowNumber) {
        for (let i = 0; i < game.board[rowNumber].length; i++) {
        if (playerLocation == game.board[rowNumber][i]) {
            game.board[rowNumber][i] = player.mark;
        }
    }
    }
    
    
    
}

playerAction(player1);


/* console.table(game.board);

console.log(playerAction(player2)); */