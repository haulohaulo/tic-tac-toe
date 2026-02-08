let buttons = document.querySelectorAll("button");


let player1 = {
    name: "Player1",
    mark: ["cross", "./marks/cross-svgrepo-com.svg"]
}

let player2 = {
    name: "Player2",
    mark: ["circle", "./marks/circle-svgrepo-com.svg"]
    
}


let gameflow = {
    currentPlayer: ""
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("clicked");
        let mark = document.createElement("img");
        mark.className = player2.mark[0];
        mark.src = player2.mark[1];
        button.appendChild(mark);
    })
})