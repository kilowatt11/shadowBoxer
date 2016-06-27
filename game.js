var players = {
    player1: "",
    player2: ""
}

var fighters = {}

function Fighter(name, health, hiPunch, lowPunch, hiKick, lowKick, special, modifier, img) {
    var newFighter = this;

    newFighter.name = name
    newFighter.image = img
    newFighter.health = health
    newFighter.abilities = {
        modifier: modifier
    }
    newFighter.attacks = {
        hiPunch: {
            damage: hiPunch,
            image: 'http://i.imgur.com/lRsoksr.jpg?1',
            image2: 'http://m.rgbimg.com/cache1nGjbo/users/h/hi/hisks/600/mhYppxc.jpg'

        },
        lowPunch: {
            damage: lowPunch,
            image: 'http://thumbs4.ebaystatic.com/d/l225/m/myxiB2FfnNAsm-M4Gl_1v4g.jpg',
            image2: 'http://i.imgur.com/86bHgaf.jpg?1'
        },
        hiKick: {
            damage: hiKick,
            image: 'http://www.clker.com/cliparts/n/4/v/8/X/C/karate-kick-silhouette-hi.png',
            image2: 'http://previews.123rf.com/images/fox3x/fox3x0911/fox3x091100012/5819709-KARATE-KICK-Stock-Vector-silhouette.jpg'
        },
        lowKick: {
            damage: lowKick,

            image: 'http://i.ebayimg.com/00/s/NDE5WDQ0OA==/$(KGrHqVHJE!E88YlI4ZPBP(mw1p5Jg~~60_35.JPG',
            image2: 'http://i.ebayimg.com/images/a/(KGrHqR,!jIE696CjBwhBP(gDKropw~~/s-l300.jpg',
        },
        special: {
            damage: special
        }
    }
    fighters[name.toLowerCase()] = newFighter;
}
new Fighter('Blanca', 150, 10, 8, 20, 15, 50, 0, 'http://silhouettesfree.com/video-games/street-fighter/blanka-silhouette-image.png');
new Fighter('Ryu', 100, 8, 5, 12, 10, 30, 0, 'http://img12.deviantart.net/df49/i/2014/063/c/2/street_fighter___ryu_silhouette_by_azza1070-d78vkoz.png');
new Fighter('Ken', 100, 8, 5, 12, 10, 30, 0, 'https://s-media-cache-ak0.pinimg.com/736x/2d/65/a2/2d65a20416370290f9407ffaf7f2db5a.jpg');

// console.log(fighters);



function playerOneChoice(name) {
    players.player1 = fighters[name];
    update(players.player1);
    console.log(players.player1);
};

function playerTwoChoice(name) {
    players.player2 = fighters[name];
    console.log(players.player2)
    update(players.player2);
}




var attack1 = function (attackType, fighter, target) {
    var defense = fighter.attacks[attackType].damage * target.abilities.modifier;

    if (target.health < fighter.attacks[attackType].damage - defense || target.health == 0) {

        var healthElem1 = document.getElementById('playerTwoHealth');
        healthElem1.innerHTML = "Player is Dead!";
        document.getElementById('player2').style.backgroundColor = "red";
        document.getElementById('playerOneImage').src = fighter.attacks[attackType].image;


    } else if (target.health < 40 && target.health > 5) {
        document.getElementById('player2').style.backgroundColor = "yellow";
        target.health -= fighter.attacks[attackType].damage - defense;
        document.getElementById('playerTwoHealth').innerHTML = Math.round(target.health)
        document.getElementById('playerOneImage').src = fighter.attacks[attackType].image;

    } else {
        target.health -= fighter.attacks[attackType].damage - defense;
        document.getElementById('playerTwoHealth').innerHTML = Math.round(target.health)
        document.getElementById('playerOneImage').src = fighter.attacks[attackType].image;
    }

    console.log(fighter.name + ' attacked ' + target.name + ' for ' + fighter.attacks[attackType].damage + ' damage')
    console.log(target.name + ' remaining health ' + target.health)
}

var attack2 = function (attackType, fighter, target) {
    var defense = fighter.attacks[attackType].damage * target.abilities.modifier;

    if (target.health < fighter.attacks[attackType].damage - defense || target.health == 0) {

        var healthElem1 = document.getElementById('playerOneHealth');
        healthElem1.innerHTML = "Player is Dead!";
        document.getElementById('player1').style.backgroundColor = "red";
        document.getElementById('playerTwoImage').src = fighter.attacks[attackType].image2;


    } else if (target.health < 40 && target.health > 5) {
        document.getElementById('player1').style.backgroundColor = "yellow";
        target.health -= fighter.attacks[attackType].damage - defense;
        document.getElementById('playerOneHealth').innerHTML = Math.round(target.health)
        document.getElementById('playerTwoImage').src = fighter.attacks[attackType].image2;

    } else {
        target.health -= fighter.attacks[attackType].damage - defense;
        document.getElementById('playerOneHealth').innerHTML = Math.round(target.health)
        document.getElementById('playerTwoImage').src = fighter.attacks[attackType].image2;
    }
    console.log(fighter.name + ' attacked ' + target.name + ' for ' + fighter.attacks[attackType].damage + ' damage')
    console.log(target.name + ' remaining health ' + target.health)
}






function update(x) {
    if (x == players.player1) {
        var healthElem1 = document.getElementById('playerOneHealth').innerHTML = players.player1.health;
        var nameElem1 = document.getElementById('playerOneName').innerHTML = players.player1.name;
        var imgElem1 = document.getElementById('playerOneImage').src = players.player1.image;
        var defenseElem = document.getElementById('hits1').innerHTML = players.player1.abilities.modifier;
    } else {
        var healthElem2 = document.getElementById('playerTwoHealth').innerHTML = players.player2.health;
        var nameElem2 = document.getElementById('playerTwoName').innerHTML = players.player2.name;
        var imgElem1 = document.getElementById('playerTwoImage').src = players.player2.image;
        var defenseElem = document.getElementById('hits2').innerHTML = players.player2.abilities.modifier;
    }
}




var abilities = {}
function Ability(name, modifier, description) {
    var newAbility = this;
    newAbility.name = name
    newAbility.modifier = modifier
    newAbility.description
    newAbility.draw = function () { };

    abilities[name.toLowerCase()] = newAbility
}

new Ability('Distraction', 0.2, 'smoke and noise')
new Ability('Kevlar', 0.4, 'high tech armor')
new Ability('Avoidance', 0.3, 'trained in Ninja agility')


function addDefense1(ability) {
    players.player1.abilities = abilities[ability]
    console.log(players.player1)

    var defenseElem = document.getElementById('abilityDescription1').innerHTML = players.player1.abilities.name + "= defense of " + players.player1.abilities.modifier;
}


function addDefense2(ability) {
    players.player2.abilities = abilities[ability]
    console.log(players.player2.abilities.name)

    var defenseElem = document.getElementById('abilityDescription2').innerHTML = players.player2.abilities.name + "= defense of " + players.player2.abilities.modifier;
}





function reset() {
    players.player1 = '';
    players.player2 = '';
    document.getElementById('playerOneHealth').innerHTML = '';
    document.getElementById('playerOneName').innerHTML = '';
    document.getElementById('playerOneImage').src = 'http://previews.123rf.com/images/arlatis/arlatis1112/arlatis111200104/11357724-Naked-stehenden-Mannes-Lizenzfreie-Bilder.jpg';
    document.getElementById('abilityDescription1').innerHTML = 'defense of =';

    document.getElementById('playerTwoHealth').innerHTML = '';
    document.getElementById('playerTwoName').innerHTML = '';
    document.getElementById('playerTwoImage').src = 'http://previews.123rf.com/images/arlatis/arlatis1112/arlatis111200104/11357724-Naked-stehenden-Mannes-Lizenzfreie-Bilder.jpg';
    document.getElementById('abilityDescription2').innerHTML = 'defense of = ';
}

// console.log(abilities[name])



