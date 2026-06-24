console.log(`The “Coin Flip” Game v2`)

let coinFlip, result

let times = prompt(`How many times should the coin flip?`)

for(let i=0; i<times; i++){

    coinFlip = Math.round(Math.random())

    if(coinFlip === 0){

        result = "Heads"
        console.log(result)
    }

    else{

        result = "Tails"
        console.log(result)
    }
}