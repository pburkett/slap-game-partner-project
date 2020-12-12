target = {
    health: 100
}

attacks = {

    slap: { dmg: 1, displayName: 'Slap' },
    kick: { dmg: 10, displayName: 'Kick' },
    punch: { dmg: 5, displayName: 'Super Punch' },
    laser: { dmg: 20, displayName: 'Laser Beam' }
}

roboNames = [
    [
        'Liam',
        'Noah',
        'Oliver',
        'i am new',
        'CHANGED',
        'Top Right',
    ],
    [
        'Wyatt',
        'Carter',
        'Julian',
        'Luke',
        'good buddy',

    ],
    [
        'Michael',
        'Daniel',
        'Logan',
        'Jackson',
        'Sebastian',
        'friend'
    ]
]
function drawAllRobos() {
    template = ''
    for (nameArrayKey in roboNames) {
        nameArray = roboNames[nameArrayKey]
        template +=
            `
            <div class="row justify-content-center mx-5">
            `
        for (roboName in nameArray) {
            template +=
                `
    <div type="button" class="col-2 bg-dark d-flex fighter-icon align-items-end justify-content-center" id="robo-img" onclick="drawFighterRobos('${nameArray[roboName]}')" style='background-image: url("https://robohash.org/${nameArray[roboName]}?set=set3")'>
            <p class="text-primary fighter-name">${nameArray[roboName]}
            </p>
    </div>
            `
        }
        template += `</div > `
    }
    document.getElementById("main").innerHTML = template

}

function attack(attackType, activeRoboName) {
    target['health'] -= attackType
    console.log('attack() ', activeRoboName);
    drawFighterRobos(activeRoboName)
}

function drawButtons(activeRoboName) {
    template = ''
    console.log(activeRoboName);
    for (attackName in attacks) {
        template +=
            `
                <div class="col-2">
                    <button class="btn bg-success" onclick="attack('${attacks[attackName]['dmg']}, '${activeRoboName}')">${attacks[attackName]['displayName']}</button>
            </div >
            `
    }
    document.getElementById("attack-buttons").innerHTML = template
}

function drawFighterRobos(roboName) {
    console.log(roboName);
    drawButtons(roboName)
    console.log(roboName);

    document.getElementById("left-robo-health").innerHTML = target.health

    template = ''
    template +=
        `
            <div type = "button" class="col-2 bg-dark d-flex fighter-icon align-items-end justify-content-center" id = "robo-img" onclick = "drawFighterRobos(${roboName})" style = 'background-image: url("https://robohash.org/${roboName}?set=set3")' >
                <p class="text-primary fighter-name">${roboName}
                </p>
    </div >
            `
    document.getElementById("main").innerHTML = template
}


function computerSelection() {
    let botCounter = 0

    arrSelectionKey = Math.floor(Math.random() * roboNames.length)
    arrSelection = roboNames[arrSelectionKey]
    robotSelectionKey = Math.floor(Math.random() * arrSelection.length)
    console.log(arrSelection[robotSelectionKey]);

    return arrSelection[robotSelectionKey]
}
drawAllRobos()








