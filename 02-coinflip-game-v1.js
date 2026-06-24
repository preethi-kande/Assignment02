console.log(`The “Coin Flip” Game v1`)

let coinFlip, result

coinFlip = Math.round(Math.random())

let choice = prompt(`Select “Heads or Tails” : `)

if(coinFlip < 1){

     result = "Heads"

    if(choice == 'Heads'){

       alert(`The flip was heads and you chose heads...you win!`)
    }

    else if(choice == 'Tails')

       alert(`The flip was heads but you chose tails...you lose!`)
}    

else{

    result = "Tails"

    if(choice == 'Heads'){

     alert(`The flip was tails but you chose heads...you lose!`) 
}
else 
    
    alert(`The flip was tails and you chose tails...you win!`)

}
