var players = {
    player1: "",
    player2: ""
}

var fighters={}

function Fighter(name, health, hiPunch, lowPunch, hiKick, lowKick, special, defense){
    var newFighter = this;

    newFighter.name = name
    newFighter.health = health
    newFighter.defense = defense
    newFighter.attacks = {
        hiPunch: {
            damage: hiPunch
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
new Fighter('Blanca', 150, 10, 8, 20, 15, 50, .2);
new Fighter('Ryu', 150, 8, 5, 12, 10, 30, .4);
new Fighter('Ken', 150, 8, 5, 12, 10, 30, .4 );

console.log(fighters);