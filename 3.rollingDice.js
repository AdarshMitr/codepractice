// On rolling a single Dice, it can show 1,2,3,4,5or6.

function rollDice(){
    
    return Math.floor(Math.random()*6)+1;
    
}

//console.log(rollDice());

document.getElementById('box').innerHTML=rollDice();