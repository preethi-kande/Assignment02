console.log(`The “Coin Flip Streak” Game`)

let coinFlip, result

do {
    coinFlip = Math.round(Math.random())

    if(coinFlip === 0){

        result = "Heads"
        console.log(result)
    }

    else{

        result = "Tails"
        console.log(result)
    }

} while (coinFlip === 1);