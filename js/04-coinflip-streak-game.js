console.log(`The “Coin Flip Streak” Game`)

let coinFlipV3, resultV3

do {
    coinFlipV3 = Math.round(Math.random())

    if(coinFlipV3 === 0){

        resultV3 = "Heads"
        console.log(resultV3)
    }

    else{

        resultV3 = "Tails"
        console.log(resultV3)
    }

} while (coinFlipV3 === 1);