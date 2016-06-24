var players = {
    player1: "",
    player2: ""
}

var fighters={}

function Fighter(name, health, hiPunch, lowPunch, hiKick, lowKick, special, defense, img){
    var newFighter = this;

    newFighter.name = name
    newFighter.image = img
    newFighter.health = health
    newFighter.defense = defense
    newFighter.attacks = {
        hiPunch: {
            damage: hiPunch,
            
        },
        lowPunch: {
            damage: lowPunch
        },
        hiKick: {
            damage: hiKick
        },
        lowKick: {
            damage: lowKick
        },
        special: {
            damage: special
        }
    }
    fighters[name.toLowerCase()] = newFighter;
}
new Fighter('Blanca', 150, 10, 8, 20, 15, 50, .2, 'http://silhouettesfree.com/video-games/street-fighter/blanka-silhouette-image.png');
new Fighter('Ryu', 100, 8, 5, 12, 10, 30, .4);
new Fighter('Ken', 100, 8, 5, 12, 10, 30, .4 );

// console.log(fighters);

function playerOneChoice(name){
    players.player1 = fighters[name];
    update(players.player1);
    console.log(players.player1);
};
function playerTwoChoice(name){
    players.player2 = fighters[name];
    console.log(players.player2)
    update(players.player2);

}

var attack1 = function(attackType,fighter,target){
  target.health -=    fighter.attacks[attackType].damage-(fighter.attacks[attackType].damage * target.defense)
  console.log(fighter.name + ' attacked ' + target.name + ' for ' + fighter.attacks.lowKick.damage + ' damage')
    console.log(target.name + ' remaining health ' +target.health)
    document.getElementById('playerTwoHealth').innerHTML = Math.round(target.health)
    
    
}
var attack2 = function(attackType,fighter,target){
  target.health -=    fighter.attacks[attackType].damage-(fighter.attacks[attackType].damage * target.defense)
  console.log(fighter.name + ' attacked ' + target.name + ' for ' + fighter.attacks.lowKick.damage + ' damage')
    console.log(target.name + ' remaining health ' +target.health)
    document.getElementById('playerOneHealth').innerHTML = Math.round(target.health);
}

function update (x){
    if(x == players.player1){
    var healthElem1 = document.getElementById('playerOneHealth').innerHTML = players.player1.health;
    var nameElem1 = document.getElementById('playerOneName').innerHTML = players.player1.name;
    var imgElem1 = document.getElementById('playerOneImage').src = players.player1.image;
    }else{
    var healthElem2 = document.getElementById('playerTwoHealth').innerHTML = players.player2.health;
    var nameElem2 = document.getElementById('playerTwoName').innerHTML = players.player2.name;
    }

}





