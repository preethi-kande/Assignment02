console.log(`The “Coin Flip” Game v2`)

let coinFlipV2, resultV2

let times = prompt(`How many times should the coin flip?`)

for(let i=0; i<times; i++){

    coinFlipV2 = Math.round(Math.random())

    if(coinFlipV2 === 0){

        resultV2 = "Heads"
        console.log(resultV2)
    }

    else{

        resultV2 = "Tails"
        console.log(resultV2)
    }
}