// Get a reference to the image
let diceImages = document.getElementsByClassName('dice');

diceImages[0].src = '/Users/Oliver/Desktop/Yahtzy/side_1_pip.png';
diceImages[1].src = '/Users/Oliver/Desktop/Yahtzy/side_2_pip.png';
diceImages[2].src = '/Users/Oliver/Desktop/Yahtzy/side_3_pip.png';
diceImages[3].src = '/Users/Oliver/Desktop/Yahtzy/side_4_pip.png';
diceImages[4].src = '/Users/Oliver/Desktop/Yahtzy/side_5_pip.png';
diceImages[5].src = '/Users/Oliver/Desktop/Yahtzy/side_6_pip.png';

let score = 0;

function rollDie(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    let diceImages = document.getElementsByClassName('dice');
    for (let i = 0; i < diceImages.length; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        diceImages[i].src = `/Users/Oliver/Desktop/Yahtzy/side_${randomValue}_pip.png`; // Set the src of the image
    }
}



function updateScore(){
    const diceValues = dice.map(die => parseInt.textContent);
    const sum = diceValues.reduce((a, b) => a + b, 0);
    scoreDisplay.textContent = 'Score: ' + score;
}

function sum(diceValues){
    return diceValues.reduce((a, b) => a + b, 0);
}

function frequency(diceValues) {
    let counter = new Array(7).fill(0);
    for (let i = 0; i < diceValues.length; i++) {
        counter[diceValues[i]]++;
    }
    return counter;
}






//Upper Section--------------------------------------------------------------------------------
// 1 - 6 
function Aces(diceValues){
    return diceValues.filter(val => val == 1).length;
}
export function Twos(diceValues){
    return diceValues.filter(val => val == 2).length;
}
export function Threes(diceValues){
    return diceValues.filter(val => val == 3).length;
}
export function Fours(diceValues){
    return diceValues.filter(val => val == 4).length;
}
export function Fives(diveValues){
    return diceValues.filter(val => val == 5).length;
}
export function Sixes(diceValues){
    return diceValues.filter(val => val == 6).length;
}

//Lower Section--------------------------------------------------------------------------------
// 1 pair
export function OnePair(dicevalues){
    let freq = frequency(dicevalues)
    let pair = 0;

    for(let i = 1; i < freq.length; i++){
        if(freq[i] == 2){
            pair = i * 2;
        }
    }
    return pair;
}

export function TwoPair(dicevalues){
    let freq = frequency(dicevalues)
    let pairs = [];

    for(let i = 1; i < freq.length; i++){
        if(freq[i] >= 2){
            pairs.push(i * 2)
            if(pairs.length == 2){
                break;
            }
        }
    }
    return pairs.length == 2 ? sum(pairs) : 0;
}


// 3 of a kind
export function ThreeOfAKind(diceValues){
    let freq = frequency(diceValues);
    let threeSame = 0;
    for(let i = 1; i <freq.length; i++){
        if(freq[i] >= 3){
            threeSame = i * 3;
        }
    }
    return threeSame;
}

// 4 of a kind
export function FourOfAKind(diceValues){
    let freq = frequency(diceValues);
    let fourSame = 0;
    for(let i = 1; i <freq.length; i++){
        if(freq[i] >= 4){
            fourSame = i * 4;
        }
    }
    return fourSame;
}

// Full House
export function FullHouse(diceValues){
    let freq = frequency(diceValues);
    let threeSame = 0;
    let twoSame = 0;
    for(let i = 1; i <freq.length; i++){
        if(freq[i] == 3){
            threeSame = i * 3;
        }
        if(freq[i] == 2){
            twoSame = i * 2;
        }
    }
    if(threeSame != 0 && twoSame != 0){
        return threeSame + twoSame;
    }
    return 0;
}

// Small Straight
export function SmallStraight(diceValues){
    let freq = frequency(diceValues);
    let straight = 0;
    for(let i = 1; i < freq.length; i++){
        if(freq[i] >= 1 && freq[i+1] >= 1 && freq[i+2] >= 1 && freq[i+3] >= 1){
            straight = 15;
        }
    }
    return straight;
}

// Large Straight
export function LargeStraight(diceValues){
    let freq = frequency(diceValues);
    let straight = 0;
    for(let i = 1; i < freq.length; i++){
        if(freq[i] >= 1 && freq[i+1] >= 1 && freq[i+2] >= 1 && freq[i+3] >= 1 && freq[i+4] >= 1){
            straight = 20;
        }
    }
    return straight;
}

// Yahtzee
export function Yahtzee(diceValues){
    let freq = frequency(diceValues);
    let yahtzee = 0;
    for(let i = 1; i < freq.length; i++){
        if(freq[i] == 5){
            yahtzee = 50;
        }
    }
    return yahtzee;
}

// Chance
export function Chance(diceValues){
    return sum(diceValues);
}

// Bonus
export function Bonus(){
    if(score >= 63){
        return 35;
    }
    return 0;
}