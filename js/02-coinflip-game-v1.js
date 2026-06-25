console.log(`The “Coin Flip” Game v1`)

let coinFlipV1, resultV1

coinFlipV1 = Math.round(Math.random())

let choice = prompt(`Select “Heads or Tails” : `)

if(coinFlipV1 < 1){

     result1 = "Heads"

    if(choice == 'Heads'){

       alert(`The flip was heads and you chose heads...you win!`)
    }

    else if(choice == 'Tails')

       alert(`The flip was heads but you chose tails...you lose!`)
}    

else{

    resultV1 = "Tails"

    if(choice == 'Heads'){

     alert(`The flip was tails but you chose heads...you lose!`) 
}
else 
    
    alert(`The flip was tails and you chose tails...you win!`)

}
